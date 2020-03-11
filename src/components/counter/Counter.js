import React from 'react';
import s from './Counter.module.sass';

const Counter = ({ rating, increaseRating, decreaseRating}) => {
  return (
      <div>
          <button onClick={() => increaseRating}>+</button>
          <input type="text" value={rating}/>
          <button onClick={() => decreaseRating}>-</button>
      </div>
  );
};

export default Counter;
