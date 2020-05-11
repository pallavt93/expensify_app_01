import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        Help.
    </div>
);

const route = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('app'));


