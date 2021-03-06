import React, {useState} from 'react';
import ShowMoreText from 'react-show-more-text';

import './Comment.sass';
import Counter from '../counter/CounterContainer';
import icon from './unknown-person.png';
import AddPostForm from "../add-post-form/AddPostFormContainer";
import timeSince from "../helpers/timeSince";
import renderMarkdownPreview from "../helpers/markdown/markdown";

const Comment = ({ id, author, date, rating, message, headPostId }) => {

    let [showAddPostForm, toggleShowAddPostForm] = useState(false)

    return (
        <>
            <div className="comment">
                <div className="image">
                    <img src={ icon } alt=""/>
                </div>
                <div className="comment__content">
                    <div className="header">
                        <span href="#" className="author link">{ author }</span>
                        <div className="small-text">{ timeSince(date) }</div>
                        <Counter rating={rating} id={id}/>
                        <div className="answer" onClick={() => toggleShowAddPostForm(!showAddPostForm)}>
                            { showAddPostForm ? 'Скрыть форму' : 'Ответить' }
                        </div>
                    </div>
                    <div className="message">
                        <ShowMoreText
                            lines={ rating <= -10 ? 1 : -1 }
                            more='Открыть комментарий'
                            less='Свернуть комментарий' >
                            <div dangerouslySetInnerHTML={ {__html: renderMarkdownPreview(message)} }></div>
                        </ShowMoreText>
                    </div>
                    <AddPostForm
                        headPostId={headPostId}
                        author={author}
                        isVisible={showAddPostForm}
                        toggleShowAddPostForm={toggleShowAddPostForm}/>
                </div>
            </div>
    </>
    );
};

export default Comment;
