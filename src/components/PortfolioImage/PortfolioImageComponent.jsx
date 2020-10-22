import React from 'react';
import './PortfolioImage.scss';
import { useMediaQuery } from 'react-responsive';

const PortfolioImage = (props) => {
  const isMediumScreen = useMediaQuery({
    query: '(min-device-width: 768px)'
  })
  const portfolio = props.item.portfolio;
  return portfolio.map((screenshot, index) =>
    <li className='screenshot' key={index}>
      <div className='thumbnail-content'>
        <div className='thumbnail-wrapper'>
          {isMediumScreen
            ? <img
              src={screenshot.thumbnail}
              alt={screenshot.thumbnail_alt}
              onClick={() => props.handleClick(screenshot)}
            />
            : <img
              src={screenshot.thumbnail}
              alt={screenshot.thumbnail_alt} />}
        </div>
        <h3>{screenshot.title}</h3>
        <p>{screenshot.text}</p>
      </div>
    </li>
  )
};

export default PortfolioImage;