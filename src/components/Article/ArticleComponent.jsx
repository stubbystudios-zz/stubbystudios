import React from 'react';
import './Article.scss';

const Article = (fields) => (
  <section className='container article'>
    <h2>{fields.article.title}</h2>
    <div>
      <p>{fields.article.body}</p>
    </div>
  </section>
);

export default Article;