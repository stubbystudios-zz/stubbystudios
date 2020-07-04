import React from 'react';
import './Homepage.scss';
import Header from '../../components/Header/HeaderComponent';
import Article from '../../components/Article/ArticleComponent';
import Portfolio from '../../components/Portfolio/PortfolioComponent';
import Skills from '../../components/Skills/SkillsComponent';
import Footer from '../../components/Footer/FooterComponent';

const Homepage = (fields) => {
  return (
    <div className='page-wrapper'>
      <Header {...fields} />
      <main role='main'>
        <Article {...fields} />
        <Portfolio {...fields} />
        <Skills {...fields} />
      </main>
      <Footer {...fields} />
    </div>
  )
};

export default Homepage;
