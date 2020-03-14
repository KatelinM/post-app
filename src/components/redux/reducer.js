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
                rating: 1,
                date: 1581466813000,
                author: 'Rrr',
                message: '---\n**Links:**\n- National Geografic [Nat geo](https://nat-geo.ru/contest/zhivaya-voda/)\n - Roca Home [Roca](http://www.ru.roca.com/) \n---\n ',
            },
            {
                id: 22,
                rating: 2,
                date: 1581466813000,
                author: 'Rrr',
                message: '### Heading 3\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n![A water](https://2l3jyssxy6-flywheel.netdna-ssl.com/wp-content/uploads/can-drinking-water-help-my-depression-and-anxiety.jpg) ![A water](https://scx1.b-cdn.net/csz/news/800/2019/1-water.jpg)',
            },
            {
                id: 23,
                rating: 3,
                date: 1581466813000,
                author: 'Rrr',
                message: '(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n__Bold text__ \n*Italic text* \n ~~Strikethrough~~\n ++Inserted text++\n==Marked text== ',
            },
            {
                id: 24,
                rating: 3,
                date: 1581466813000,
                author: 'Rrr',
                message: '### Heading 3\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n![A water](https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/17511/images/gldPHZUSt2a5DxxrxWsg_water-harvester-1440x970.jpg) ![A water](https://cdn.hswstatic.com/gif/water-life-crop.jpg)',
            }
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