import React from 'react';
import butter from '../../butter-client.js';
import './Portfolio.scss';

class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {
        portfolio: []
      }
    }
  }

  async componentDidMount() {
    const resp = await butter.page.retrieve('*', 'homepage');
    this.setState({ fields: resp.data.data.fields });
  }

  render() {
    const portfolio = this.state.fields.portfolio;
    const open = this.state;
    console.log('Portfolio', open)

    return (
      <ul>
        {portfolio.map((screenshot, index) => {
          return (
            <li className='screenshot' key={index}>
              <div className='ReactModal__Content thumbnail-content'>
                <img src={screenshot.thumbnail} alt={screenshot.thumbnail_alt} />
                <h3>{screenshot.title}</h3>
                <p>{screenshot.text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
};

export default Portfolio;