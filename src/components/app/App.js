import React from 'react';
import s from './App.module.sass';
import Article from "../article/ArticleContainer";
import CommentBox from "../comment-box/CommentBoxContainer";
import AddPostForm from "../add-post-form/AddPostFormContainer";

function App() {
  return (
    <div className={s.container}>
        <Article/>
        <CommentBox/>
    </div>
  );
}

export default App;
