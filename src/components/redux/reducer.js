const initialState = {
    title: 'Живая вода',
    date: '02.03.20',
    body: '«Живая вода» – совместный фотоконкурс Nat-geo.ru и Roca, посвященный источникам пресной воды. Стремительные реки и зеркальные озера, горные ручьи и украшенные кувшинками пруды, теплый весенний дождь и капли прохладной росы на утренней траве – покажите, как прекрасно живое золото нашей планеты! Победители получат классные призы, а лучшие работы будут показаны на масштабном мероприятии Roca, которое пройдет в Москве 19 марта.',
    comments:[
        {
            headComment: {
                id: '',
                rating: '',
                date: '',
                author: '',
                body: '',
                subComments:[
                    {
                        rating: '',
                        date: '',
                        author: '',
                        body: '',
                    },
                    {
                        rating: '',
                        date: '',
                        author: '',
                        body: '',
                    },
                    {
                        rating: -1,
                        date: new Date(),
                        author: '',
                        body: '',
                    },
                ]
            }
        }
    ]

};

const rootReducer = ( state = initialState, action ) => {

    switch(action.type) {
        case 'ADD_POST':
            return [
                ...state,
            ];

        default:
            return state;
    }
};

export default rootReducer;