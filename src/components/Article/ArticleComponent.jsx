import React from 'react';
import './Article.scss';

const Article = ({ article }) => (
  <section className='container article'>
    <h2>{article.title}</h2>
    <div>
      <p>{article.body}</p>
    </div>
  </section>
);

export default Article;