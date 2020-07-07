import React from 'react';
import butter from './butter-client.js'
import { Helmet } from 'react-helmet'
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        header: '',
        article: '',
        portfolio: [],
        skills: [],
        footer: []
      }
    }
  }

  async componentDidMount() {
    const resp = await butter.page.retrieve('*', 'homepage');
    this.setState({ fields: resp.data.data.fields });
  }

  render() {
    const fields = this.state.fields;

    return (
      <>
        <Helmet>
          <title>{fields.header.seo_title}</title>
        </Helmet>
        <Switch>
          <Route exact path="/" render={() =>
            (<Homepage {...fields} />)
          } />
          <Route path='/ContactPage' component={ContactPage} />
        </Switch>
      </>
    );
  }
}

export default App;
