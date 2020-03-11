import React from 'react';
import s from './Comment.module.sass';
import Counter from '../counter/CounterContainer';
import icon from './unknown-person.png';

const Comment = ({ img, nickname, time, rating, message }) => {
    return (
        <div className={s.comment}>
            <div className={s.image}>
                <img src={ icon } alt=""/>
            </div>
            <div>
                <div className={s.header}>
                    <a href="#" className={s.nickname}>{ nickname }</a>
                    <div className="small-text">{ time }</div>
                    <Counter rating={rating} />
                    <div className={s.answer}>Ответить</div>
                </div>
                <div className={s.message}>
                    { message }
                </div>
            </div>
        </div>
    );
};

export default Comment;
