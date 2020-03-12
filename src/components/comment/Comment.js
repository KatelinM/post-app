import React, {useState} from 'react';
import ShowMoreText from 'react-show-more-text';

import './Comment.sass';
import Counter from '../counter/CounterContainer';
import icon from './unknown-person.png';
import AddPostForm from "../add-post-form/AddPostFormContainer";

const Comment = ({ id, author, time, rating, message, headPostid }) => {

    let [showAddPostForm, toggleShowAddPostForm] = useState(false)

    return (
        <div className="comment">
            <div className="image">
                <img src={ icon } alt=""/>
            </div>
            <div>
                <div className="header">
                    <span href="#" className="author link">{ author }</span>
                    <div className="small-text">{ time }</div>
                    <Counter rating={rating} id={id}/>
                    <div className="answer" onClick={() => toggleShowAddPostForm(!showAddPostForm)}>
                        { showAddPostForm ? 'Скрыть форму' : 'Ответить' }
                    </div>
                </div>
                <ShowMoreText
                    lines={ rating <= -10 ? 1 : -1 }
                    more='Открыть комментарий'
                    less='Свернуть комментарий' >
                    { message }
                </ShowMoreText>
                {showAddPostForm && <AddPostForm headPostid={headPostid} author={author} /> }
            </div>
        </div>
    );
};

export default Comment;
