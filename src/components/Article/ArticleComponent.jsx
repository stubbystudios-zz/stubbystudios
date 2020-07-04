import React from 'react';

const Article = (fields) => (
  <section className='container'>
    <h2>{fields.article.title}</h2>
    <div>
      <p>{fields.article.body}</p>
    </div>
  </section>
);

export default Article;