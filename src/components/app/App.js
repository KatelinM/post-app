import React from 'react';
import Article from "../article/ArticleContainer";
import CommentBox from "../comment-box/CommentBoxContainer";

function App() {
  return (
    <div className="container">
        <Article/>
        <CommentBox/>
    </div>
  );
}

export default App;
