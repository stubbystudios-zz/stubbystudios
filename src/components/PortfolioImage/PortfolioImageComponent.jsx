import React from 'react';
import './PortfolioImage.scss';

const PortfolioImage = (props) => {
  const portfolio = props.item.portfolio;
  return portfolio.map((screenshot, index) =>
    <li className='screenshot' key={index}>
      <div className='thumbnail-content'>
        <img
          src={screenshot.thumbnail}
          alt={screenshot.thumbnail_alt}
          onClick={() => props.handleClick(screenshot)}
        />
        <h3>{screenshot.title}</h3>
        <p>{screenshot.text}</p>
      </div>
    </li>
  )
};

export default PortfolioImage;