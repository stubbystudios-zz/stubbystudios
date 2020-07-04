import React from 'react';
import './Portfolio.scss';

const Portfolio = (fields) => (
  <section className='container portfolio'>
    <h2 className='section-title'>{fields.portfolio_title}</h2>
    <ul>
      {fields.portfolio.map((port, index) => {
        return (
          <li className='screenshot' key={index}>
            <img src={port.thumbnail} alt={port.thumbnail_alt} />
            <h3>{port.title}</h3>
            <p>{port.text}</p>
          </li>
        )
      })}
    </ul>
  </section>
);

export default Portfolio;