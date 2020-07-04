import React from 'react';
import './Header.scss';

const Header = (fields) => {
  console.log('THE DATA', `${fields.header.headline}`);
  return (
    <header role='banner' className='header-main'
      style={{
        backgroundImage: `url(${fields.header.hero_image})`
      }}>
      <div className='container'>
        <img src={fields.header.logo_image} alt={fields.header.logo_alt} />
        <h1>{fields.header.headline}</h1>
        <h4>{fields.header.sub_headline}</h4>
      </div>
    </header>
  )
};

export default Header;
