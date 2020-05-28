import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage =  ( { startLogin }) => (
    <div>
        LoginPage
        <div>
            <button onClick={startLogin}>log in</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);