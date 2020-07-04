import React from 'react';
import './Footer.scss';

const Footer = (fields) => (
  <footer role='contentinfo'>
    <div className='container page-footer'>
      <p>Powered <a href="https://buttercms.com/">ButterCMS</a> and React</p>
      <img src={fields.footer.logo} alt={fields.footer.alt} />
    </div>
  </footer>
);

export default Footer;
