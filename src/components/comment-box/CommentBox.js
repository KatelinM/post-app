import React, {useContext, useState} from 'react';
import s from './CommentBox.sass';
import Comment from "../comment/Comment";
import timeSince from "../helpers/timeSince";

let CommentsGroup = ({comment}) => {
    let [showMore, toggleShowMore] = useState(false)

    const hasChildComments = comment.comments && comment.comments.length;

    return(
        <>
            <div className={ hasChildComments ? 'group-comments' : 'single-comment' }>
                <div className="head-comment">
                    <Comment {...comment} time={timeSince(comment.date)} />
                </div>
                {hasChildComments && <>
                    <div className={`sub-comments ${!showMore ? 'hide' : null}`} >
                        { comment.comments.map(c => {
                            return <Comment {...c} time={timeSince(c.date)} />
                        }) }

                        <button className ='button-more' onClick={ ()=>toggleShowMore(!showMore) }>
                            { showMore ? 'Свернуть' : 'Показать еще' }
                        </button>
                    </div>
                </>
                }
            </div>
        </>
    )
};

const CommentBox = ( {comments} ) => {
    return (
        <div className="comment-box">
            <div className="title">Комментарии:</div>

            { comments.map(c => {
                return <CommentsGroup comment={c}/>
            }) }

        </div>
    );
};

export default CommentBox;