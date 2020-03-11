import React from 'react';
import s from './CommentBox.module.sass';
import Comment from "../comment/Comment";

const CommentBox = ({ posts }) => {

    let commentsElements =
        posts
            .reverse()
            .map(p => <Comment
                        key={p.id}
                        img={p.author.img}
                        nickname={p.author.nickname}
                        time={p.date}  rating={p.rating}
                        message={p.message} />);

    return (
        <div className={s['comment-box']}>
            <div>
                <div className={s.title}>Комментарии:</div>
                { commentsElements }
            </div>
        </div>
    );
};

export default CommentBox;