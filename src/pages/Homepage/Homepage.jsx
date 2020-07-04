import React from 'react';
import './Homepage.scss';
import Header from '../../components/Header/HeaderComponent';
import Article from '../../components/Article/ArticleComponent';
import Portfolio from '../../components/Portfolio/PortfolioComponent';
import Skills from '../../components/Skills/SkillsComponent';

const Homepage = (fields) => {
  return (
    <div className='page-wrapper'>
      <Header {...fields} />
      <main role='main'>
        <Article {...fields} />
        <Portfolio {...fields} />
        <Skills {...fields} />
      </main>
      <footer role='contentinfo'>
        <div className='container page-footer'>
          <p>Powered <a href="https://buttercms.com/">ButterCMS</a> and React</p>
          <img src={fields.footer.logo} alt={fields.footer.alt} />
        </div>
      </footer>
    </div>
  )
};

export default Homepage;
