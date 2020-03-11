import React from 'react';
import ShowMoreText from 'react-show-more-text';

import s from './Comment.module.sass';
import Counter from '../counter/CounterContainer';
import icon from './unknown-person.png';

const Comment = ({ id, img, nickname, time, rating, message, increaseRating, decreaseRating }) => {
    return (
        <div className={s.comment}>
            <div className={s.image}>
                <img src={ icon } alt=""/>
            </div>
            <div>
                <div className={s.header}>
                    <a href="#" className={s.nickname}>{ nickname }</a>
                    <div className="small-text">{ time }</div>
                    <Counter rating={rating} id={id}/>
                    <div className={s.answer}>Ответить</div>
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
