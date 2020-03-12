export const addPostAC = (id, newPost) => ({ type: 'ADD_POST', id: id, newPost: newPost });

export const increaseRatingAC = (id) => ({ type: 'INCREASE_RATING', id: id });

export const decreaseRatingAC = (id) => ({ type: 'DECREASE_RATING', id: id });

