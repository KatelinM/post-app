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
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
            {
                id: 1,
                rating: 111,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 2,
                rating: 112,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 3,
                rating: 113,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 4,
                rating: 114,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ]
    },
    {
        id: 5,
        rating: 1,
        date: 1581466818000,
        author:  '1',
        message: '',
        comments: [],
    },
    {
        id: 6,
        rating: 2,
        date: 1547943618000,
        author: '1',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [],
    },
    {
        id: 7,
        rating: 3,
        date: 1532046018000,
        author: '1',
        message: '',
        comments: [
            {
                id: 8,
                rating: 111,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 9,
                rating: 112,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 10,
                rating: 113,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 11,
                rating: 114,
                date: 1581466813000,
                author: 'fgffffff',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 12,
                rating: 115,
                date: 1581466813000,
                author: 'Rrr',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ]
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
            if (action.id){
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
                console.log('comment',comment)
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        rating: comment.rating + 1
                    }
                } else {
                    const subComments = comment.comments;
                    if (subComments && subComments.length) {
                        let subComModified =  subComments.filter((subComment) => {
                            return subComment.id === action.id
                        });

                        return {
                            ...subComments,
                            ...subComModified
                        };
                    }
                    else {
                        return {
                            ...subComments,
                        };
                    }
                    return {
                        ...comment,
                    };
                }
            }
        )
);

case 'DECREASE_RATING':
return {
    ...state,
    comments: state.map((commentList) => {

        return commentList.map((c) => {

            if (c.id !== action.id) {
                return c
            } else {
                return {
                    ...c,
                    rating: c.rating - 1
                }
            }

        });
    })
};

default:
return state;
}
};

export default combineReducers({
    article,
    comments,
});