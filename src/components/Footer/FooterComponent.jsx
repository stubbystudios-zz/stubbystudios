import React from 'react';
import './Footer.scss';

const Footer = ({ footer }) => (
  <footer role='contentinfo'>
    <div className='container page-footer'>
      <p>Powered <a href="https://buttercms.com/">ButterCMS</a> and React</p>
      <img src={footer.logo} alt={footer.alt} />
    </div>
  </footer>
);

export default Footer;
