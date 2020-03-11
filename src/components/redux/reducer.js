const initialState = {
    title: 'Живая вода',
    date: '02.03.20',
    body: '«Живая вода» – совместный фотоконкурс Nat-geo.ru и Roca, посвященный источникам пресной воды. Стремительные реки и зеркальные озера, горные ручьи и украшенные кувшинками пруды, теплый весенний дождь и капли прохладной росы на утренней траве – покажите, как прекрасно живое золото нашей планеты! Победители получат классные призы, а лучшие работы будут показаны на масштабном мероприятии Roca, которое пройдет в Москве 19 марта.',
    comments:[
       {
            id: '4',
            rating: '92',
            date: '11.03.2020',
            author: {
                nickname: 'Rrr',
                img: '8',
            },
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            subComments: [
                {
                    id: '',
                    rating: '',
                    date: '',
                    author: {
                        nickname: '1',
                        img: '',
                    },
                    message: '',
                },
                {
                    id: '',
                    rating: '',
                    date: '',
                    author: {
                        nickname: '1',
                        img: '',
                    },
                    message: '',
                },
                {
                    id: '',
                    rating: -1,
                    date: new Date(),
                    author: {
                        nickname: '1',
                        img: '',
                    },
                    message: '',
                },
            ]
       }
    ]
};

const rootReducer = ( state = initialState, action ) => {

    switch(action.type) {
        case 'ADD_POST':
            return [
                ...state,
            ];

        case 'INCREASE_RATING':
            return [
                ...state,
            ];

        case 'DECREASE_RATING':
            return [
                ...state,
            ];

        default:
            return state;
    }
};

export default rootReducer;