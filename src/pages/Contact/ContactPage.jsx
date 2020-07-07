import React from 'react';
import butter from '../../butter-client.js';
import { Formik, Form, Field, ErrorMessage } from "formik";
import './Contact.scss';

class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {
        contact_me: []
      }
    }
  }

  async componentDidMount() {
    const resp = await butter.page.retrieve('*', 'contact-page');
    this.setState({ fields: resp.data.data.fields });
  }

  render() {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const fields = this.state.fields;

    return (
      <section className='container contact-page'>
        <h2>{fields.contact_me.title}</h2>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            let errors = {};
            if (values.name === '') {
              errors.name = 'What\'s your name?';
            } else if (values.name.length < 1) {
              errors.name = 'What\'s your name?'
            }
            if (values.email === '') {
              errors.email = 'What\'s your email?';
            } else if (!emailTest.test(values.email)) {
              errors.email = 'Invalid email address format';
            }
            if (values.message === '') {
              errors.message = 'Say something. Anything!';
            } else if (values.message.length < 1) {
              errors.message = 'Say something. Anything!'
            }
            return errors;
          }}
          onSubmit={({ setSubmitting }) => {
            alert('Form is validated! Submitting the form...');
            setSubmitting(false);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <Field
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                  className={`form-control ${
                    touched.name && errors.name
                      ? 'is-invalid'
                      : ''
                    }`}
                />
                <ErrorMessage
                  component='div'
                  name='name'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Field
                  type='email'
                  name='email'
                  className={`form-control ${
                    touched.email && errors.email
                      ? 'is-invalid'
                      : ''
                    }`}
                  placeholder='Enter your email'
                />
                <ErrorMessage
                  component='div'
                  name='email'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <Field
                  as="textarea"
                  type='textarea'
                  name='message'
                  rows='5'
                  className={`form-control ${
                    touched.message && errors.message
                      ? 'is-invalid'
                      : ''
                    }`}
                  placeholder='Enter your message'
                />
                <ErrorMessage
                  component='div'
                  name='message'
                  className='invalid-feedback'
                />
              </div>
              <button
                type='submit'
                className='btn'
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Please wait...'
                  : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    )
  }
};

export default ContactPage;