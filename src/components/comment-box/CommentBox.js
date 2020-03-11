import React from 'react';
import s from './CommentBox.module.sass';
import Comment from "../comment/Comment";

const CommentBox = ({ posts }) => {
    var timeSince = function(date) {

        const diffTime = Math.floor(new Date() - date);
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60 ));

        var interval, intervalType;

       if (diffHours < 1) {
           interval = diffHours / 60;
           intervalType = 'минут';
       } else if (diffHours < 24) {
           interval = diffHours;
           intervalType = 'часов';
       } else if (diffHours > 24) {
            interval = Math.floor(diffHours / 24);

            if (interval === 1) {
                intervalType = 'день';
            } else if (interval < 5) {
                intervalType = 'дня';
            } else {
                intervalType =  'дней';
            }
        }

        return interval + ' ' + intervalType + ' назад';
    };

    let commentsElements =
        posts
            .reverse()
            .map(c => {
                    return  (
                        <div className="comment-group">
                            <Comment
                                key={c.id}
                                img={c.author.img}
                                nickname={c.author.nickname}
                                time={timeSince(c.date)}
                                rating={c.rating}
                                message={c.message}/>

                            {c.subComments.length && c.subComments.map(c => (
                                <Comment
                                    key={c.id}
                                    img={c.author.img}
                                    nickname={c.author.nickname}
                                    time={timeSince(c.date)}
                                    rating={c.rating}
                                    message={c.message}/>
                            )) }
                        </div>
                    )
                }
            );

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