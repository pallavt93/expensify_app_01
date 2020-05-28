import authReducer from '../../reducers/auth';
import expenses from '../../reducers/expenses';

test('should set uid for login',()=>{
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe('abc123');
});

test('should set uid for logout',()=>{
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid:'123abc'}, action);
    expect(state).toEqual({});
    
});