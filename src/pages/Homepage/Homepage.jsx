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
  portfolio_title,
  skills,
  skills_title,
  footer }) => {

  return (
    <div className='page-wrapper'>
      <Header header={header} />
      <main role='main'>
        <Article article={article} />
        <section className='container portfolio'>
          <h2 className='section-title'>{portfolio_title}</h2>
          <Portfolio portfolio={portfolio} />
        </section>
        <section className='container skills'>
          <h2 className='section-title'>{skills_title}</h2>
          <Skills skills={skills} />
        </section>
      </main>
      <Footer footer={footer} />
    </div>
  )
};

export default Homepage;
