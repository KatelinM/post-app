import React from 'react';
import s from './Counter.module.sass';

const Counter = ({ id, rating, increaseRating, decreaseRating}) => {
  const onIncreaseButtonClick = () => increaseRating(id);
  const onDecreaseButtonClick = () => decreaseRating(id);

  return (
      <div>
          <button onClick={ onIncreaseButtonClick }>+</button>
          <span>{rating}</span>
          <button onClick={ onDecreaseButtonClick }>-</button>
      </div>
  );
};

export default Counter;
