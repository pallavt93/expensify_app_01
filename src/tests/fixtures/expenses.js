import moment from 'moment';

export default [
    {
        id:'1',
        note:'',
        description:'Gum',
        createdAt:0,
        amount:54
    },
    {
        id:'2',
        note:'',
        description:'Rent',
        createdAt:moment(0).subtract(4,'days').valueOf(),
        amount:540
    },
    {
        id:'3',
        note:'',
        description:'Water',
        createdAt:moment(0).add(4,'days').valueOf(),
        amount:114
    }
];