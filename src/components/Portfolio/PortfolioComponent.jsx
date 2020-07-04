import React from 'react';
import './Portfolio.scss';

const Portfolio = ({ portfolio }) => (
  <section className='container portfolio'>
    <h2 className='section-title'>{portfolio.portfolio_title}</h2>
    <ul>
      {portfolio.map((screenshot, index) => {
        return (
          <li className='screenshot' key={index}>
            <img src={screenshot.thumbnail} alt={screenshot.thumbnail_alt} />
            <h3>{screenshot.title}</h3>
            <p>{screenshot.text}</p>
          </li>
        )
      })}
    </ul>
  </section>
);

export default Portfolio;