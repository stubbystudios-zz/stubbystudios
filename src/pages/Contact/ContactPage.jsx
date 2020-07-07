import React from 'react';
import butter from '../../butter-client.js';
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
    const fields = this.state.fields;

    return (
      <section className='container contact-page'>
        <h2>{fields.contact_me.title}</h2>
        <div className='form-wrapper'>
          {fields.contact_me.contact_form}
        </div>
      </section>
    );
  }
}

export default ContactPage;