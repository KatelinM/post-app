import React from 'react';
import s from './CommentBox.sass';
import Comment from "../comment/Comment";
import timeSince from "../helpers/timeSince";

const CommentBox = ( {comments} ) => {
    let getComment = (commentList) => {
         return (
            commentList
                .map(c => {
                    console.log(c)
                    return (
                        <div key={c.id} className="comment-group">
                            <Comment
                                id={c.id}
                                author={c.author}
                                time={timeSince(c.date)}
                                rating={c.rating}
                                message={c.message}/>
                            { c.comments && c.comments.length ? getComment(c.comments) : null }
                        </div>
                    )
                }
             )
         )
    };

    let commentsElements = getComment(comments);
    return (
        <div className="comment-box">
            <div className="title">Комментарии:</div>
            { commentsElements }
        </div>
    );
};

export default CommentBox;