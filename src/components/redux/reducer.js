import {combineReducers} from "redux";

const articleInit = {
    title: 'Живая вода',
    date: '02.03.2020',
    body: '«Живая вода» – совместный фотоконкурс Nat-geo.ru и Roca, посвященный источникам пресной воды. Стремительные реки и зеркальные озера, горные ручьи и украшенные кувшинками пруды, теплый весенний дождь и капли прохладной росы на утренней траве – покажите, как прекрасно живое золото нашей планеты! Победители получат классные призы, а лучшие работы будут показаны на масштабном мероприятии Roca, которое пройдет в Москве 19 марта.',
};

const commentsInit = [
    {
        id: 0,
        rating: 0,
        date: 1581466813000,
        author: 'Rrr',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
            {
                id: 21,
                rating: 111,
                date: 1581466813000,
                author: 'Rrr',
                message: '---\n\n**Дополнительные ресурсы:**  - National Geografic [nat-geo.ru/contest/zhivaya-voda/](https://nat-geo.ru/contest/zhivaya-voda/) \n - Or visit my [Github Account](https://throvn.github.io) \n\n---\n ',
            },
            {
                id: 22,
                rating: 112,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 23,
                rating: 113,
                date: 1581466813000,
                author: 'Rrr',
                message: '# Lorem ipsum dolor sit\n ### amet\n tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',            },
            {
                id: 24,
                rating: 1,
                date: 1581466813000,
                author: 'Rrr',
                message: '---\n**Advertisement:**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ]
    },
    {
        id: 1,
        rating: 1,
        date: 1581466818000,
        author:  '1',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [],
    },
];

const article = ( state = articleInit, action ) => {
    switch(action.type) {
        default:
            return state;
    }
};

const comments = ( state = commentsInit, action ) => {

    switch(action.type)  {
        case 'ADD_POST':
            if (action.id !== null){
                return state.map((c) => {
                    if (c.id === action.id) {
                        return {
                            ...c,
                            comments: [
                                ...c.comments,
                                action.newPost
                            ]
                        }
                    } else {
                        return c;
                    }
                })
            } else {
                return [
                    ...state,
                    action.newPost
                ]
            }

        case 'INCREASE_RATING':
            return (
                state
                    .map(comment => {
                            if (comment.id === action.id) {
                                return {
                                    ...comment,
                                    rating: comment.rating + 1
                                }
                            } else {
                                if (comment.comments.length) {
                                    return {
                                        ...comment,
                                        comments: comment.comments.map(subComment => {
                                            if (subComment.id === action.id) {
                                                return {
                                                    ...subComment,
                                                    rating: subComment.rating + 1
                                                }
                                            } else {
                                                return subComment
                                            }
                                        })
                                    }
                                } else {
                                    return comment
                                }
                            }
                        }
                    )
            );

        case 'DECREASE_RATING':
            return (
                state
                    .map(comment => {
                            if (comment.id === action.id) {
                                return {
                                    ...comment,
                                    rating: comment.rating - 1
                                }
                            } else {
                                if (comment.comments.length) {
                                    return {
                                        ...comment,
                                        comments: comment.comments.map(subComment => {
                                            if (subComment.id === action.id) {
                                                return {
                                                    ...subComment,
                                                    rating: subComment.rating - 1
                                                }
                                            } else {
                                                return subComment
                                            }
                                        })
                                    }
                                } else {
                                    return comment
                                }
                            }
                        }
                    )
            );

        default:
            return state;
    }
};

export default combineReducers({
    article,
    comments,
});