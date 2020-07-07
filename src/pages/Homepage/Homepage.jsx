import React from 'react';
import Header from '../../components/Header/HeaderComponent';
import Article from '../../components/Article/ArticleComponent';
import Portfolio from '../../components/Portfolio/PortfolioComponent';
import Skills from '../../components/Skills/SkillsComponent';
import Footer from '../../components/Footer/FooterComponent';

const Homepage = ({
  header,
  article,
  portfolio,
  skills,
  footer }) => {
  return (
    <div className='page-wrapper'>
      <Header header={header} />
      <main role='main'>
        <Article article={article} />
        <Portfolio portfolio={portfolio} />
        <Skills skills={skills} />
      </main>
      <Footer footer={footer} />
    </div>
  )
};

export default Homepage;
