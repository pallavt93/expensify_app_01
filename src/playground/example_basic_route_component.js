import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard.
    </div>
);

const AddExpensePage = () => (
    <div>
        AddExpense.
    </div>
);

const EditExpensePage = () => (
    <div>
        EditExpense.
    </div>
);

const HelpPage = () => (
    <div>
        Help.
    </div>
);


const route = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} exact={true}/>
            <Route path="/edit" component={EditExpensePage} exact={true}/>
            <Route path="/help" component={HelpPage} exact={true}/>
        </div>
        
    </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('app'));


