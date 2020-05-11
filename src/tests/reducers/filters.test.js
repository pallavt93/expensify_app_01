import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values',()=>{
    const state = filterReducer(undefined, { type:'@@INIT' });

    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sort by to amount',()=>{
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const text = 'rent';
    const action = {type: 'SET_TEXT_FILTER',text}
    const state = filterReducer(currentState, action);
    expect(state.text).toBe(text);
});

test('should set start date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const startDate = moment(0).valueOf();
    const action = {type: 'SET_START_DATE',startDate}
    const state = filterReducer(currentState, action);
    expect(state.startDate).toBe(startDate);
});

test('should set end date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const endDate = moment(0).valueOf();
    const action = {type: 'SET_END_DATE',endDate}
    const state = filterReducer(currentState, action);
    expect(state.endDate).toBe(endDate);
});