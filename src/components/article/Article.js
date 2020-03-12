import React from 'react';
import s from './Article.module.sass';

const Article = ({title, date, body}) => {
  return (
      <div className={s.article}>
        <div className={`${s.title} link`}>
          { title }
        </div>
        <div className={`${s.date} small-text`}>
          <div>{ date }</div>
        </div>
        <div className={s.body}>
          <div>{ body }</div>
        </div>
      </div>
  );
};

export default Article;
