import React, {useState} from 'react';
import './CommentBox.sass';
import Comment from "../comment/Comment";
import AddPostForm from "../add-post-form/AddPostFormContainer";

let CommentsGroup = ({comment, showAddPostForm}) => {
    let [showMore, toggleShowMore] = useState(showAddPostForm)

    const hasChildComments = comment.comments && comment.comments.length;
    let headPostId = comment.id;

    return(
        <>
            <div className={ hasChildComments ? 'group-comments' : 'single-comment' }>
                <div className="head-comment">
                    <Comment {...comment} date={comment.date} headPostId={headPostId}/>
                </div>
                {
                    !!hasChildComments &&
                    <>
                        <div className={`sub-comments ${!showMore ? 'hide' : null}`} >
                            { comment.comments.map(c => {
                                return <Comment key={c.id} {...c} date={c.date} headPostId={headPostId}/>
                            }) }

                            {
                                comment.comments.length > 3 &&
                                <button className='button-more' onClick={() => toggleShowMore(!showMore)}>
                                    {showMore ? 'Свернуть' : 'Показать следующие комментарии'}
                                </button>
                            }
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
                return <CommentsGroup key={c.id} comment={c}/>
            }) }

            <AddPostForm headPostId={null} author={null} isVisible={true}/>
        </div>
    );
};

export default CommentBox;