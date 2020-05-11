import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
        404. <Link to="/">To Home.</Link>
    </div>
);

const Header = ()=>(
    <header>
        <h1>Expensify</h1>
        <Link to="/">To Home</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/help">Help</Link>
    </header>
);

const route = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('app'));


