import React from 'react';
import butter from '../../butter-client.js';
import './Portfolio.scss';
import Modal from '../PortfolioImage/PortfolioImageComponent';

class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedImage: null,
      images: null
    }
  }

  async componentDidMount() {
    const resp = await butter.page.retrieve('*', 'homepage');
    this.setState({ fields: resp.data.data.fields });
    this.setImages();
  }

  setImages = () => {
    return this.setState({
      images:
        [
          { portfolio: this.state.fields.portfolio }
        ]
    })
  }

  renderImages = () => {
    return this.state.images.map((item, i) =>
      <Modal
        key={i}
        handleClick={this.handleClick}
        item={item}
      />
    )
  }

  getSelectedImage = () => {
    return (
      <section className='modal-outer'>
        <div className='overlay' onClick={() => this.handleClick(null)} />
        <div className='modal-inner'>
          <header>
            <h3>{this.state.selectedImage.title}</h3>
            <i className="icon icon-close" onClick={() => this.handleClick(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.1 47.1">
                <g data-name="Group 1" fill="none" stroke="#2d2d2d" strokeWidth="10">
                  <path data-name="Line 1" d="M3.5 3.5l40 40" />
                  <path data-name="Line 2" d="M43.5 3.5l-40 40" />
                </g>
              </svg>
            </i>
          </header>
          <img src={this.state.selectedImage.full_image} alt={this.state.selectedImage.thumbnail_alt} />
        </div>
      </section>
    )
  }

  handleClick = (image) => {
    this.setState({
      selectedImage: image
    })
  }

  render() {
    // const portfolio = this.state.images;

    return (
      <section className='portfolio'>
        {this.state.selectedImage
          ? this.getSelectedImage()
          : null
        }
        <ul>
          {this.state.images
            ? this.renderImages()
            : null
          }
        </ul>
      </section>
    )
  }
};

export default Portfolio;