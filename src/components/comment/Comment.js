import React from 'react';
import ShowMoreText from 'react-show-more-text';

import './Comment.sass';
import Counter from '../counter/CounterContainer';
import icon from './unknown-person.png';

const Comment = ({ id, author, time, rating, message }) => {
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
                    <div className="answer">Ответить</div>
                </div>
                <ShowMoreText
                    lines={ rating <= -10 ? 1 : -1 }
                    more='Открыть комментарий'
                    less='Свернуть комментарий' >
                    { message }
                </ShowMoreText>

            </div>
        </div>
    );
};

export default Comment;
