import React from 'react';
import s from './App.module.sass';
import Article from "../article/ArticleContainer";

function App() {
  return (
    <div className={s.container}>
        <Article/>
    </div>
  );
}

export default App;
