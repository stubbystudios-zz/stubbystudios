import React from 'react';
import './Article.scss';

const Article = ({ article }) => {
  return (
    <section className='container article'>
      <h2>{article.title}</h2>
      <div>
        <p>{article.body}</p>
        <div className='btn-container'>
          <a href='https://www.linkedin.com/in/careybest/' className='btn linkedin-btn'>
            Connect on LinkedIn</a>
          <a href='https://my.indeed.com/p/careyb-n8x5j7o' className='btn indeed-btn'>
            Indeed Resume</a>
        </div>
      </div>
    </section>
  )
};

export default Article;