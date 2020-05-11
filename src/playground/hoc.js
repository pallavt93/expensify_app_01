// Higher Order Component (HOC): A component (HOC) that renders another commponent.
// Reuse Code
// Render Highjacking
// Prop Manipulation
//  Abstract State 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p> info : {props.info}</p>
    </div>

);

//return a higher order component

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>this is admin warning.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


// HOC
const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated && <WrappedComponent {...props} />}
        </div>
    );
};

const Authenticate = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='This is some information.' />,document.getElementById('app'));
ReactDOM.render(<Authenticate isAuthenticated={false} info='This is some information.' />, document.getElementById('app'));
