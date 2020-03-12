import React, {useState} from 'react';
import ShowMoreText from 'react-show-more-text';

import './Comment.sass';
import Counter from '../counter/CounterContainer';
import icon from './unknown-person.png';
import Article from "../article/ArticleContainer";
import AddPostForm from "../add-post-form/AddPostFormContainer";

const Comment = ({ id, author, time, rating, message }) => {

    let [showAddPostForm, toggleShowAddPostForm] = useState(false)

    return (
        <div className="comment">
            <div className="image">
                <img src={ icon } alt=""/>
            </div>
            <div>
                <div className="header">
                    <a href="#" className="author">{ author }</a>
                    <div className="small-text">{ time }</div>
                    <Counter rating={rating} id={id}/>
                    <div className="answer" onClick={() => toggleShowAddPostForm(!showAddPostForm)}>
                        { showAddPostForm ? 'Скрыть' : 'Ответить' }
                    </div>
                </div>
                <ShowMoreText
                    lines={ rating <= -10 ? 1 : -1 }
                    more='Открыть комментарий'
                    less='Свернуть комментарий' >
                    { message }
                </ShowMoreText>
                {showAddPostForm && <AddPostForm id={id}/> }
            </div>
        </div>
    );
};

export default Comment;
