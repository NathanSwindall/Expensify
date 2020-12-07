import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';



const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my AddExpensePage component
    </div>
)

const  EditExpensePage = () => (
    <div>
        This is the Edit page
    </div>

)


const  HelpPage = () => (
    <div>
        This is the Help page
    </div>
)

const Page404 = () => (
    <div>
        404 Page <Link to="/">Go Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={Page404} />
        </Switch>
    </div>
        
    </BrowserRouter>
)

export default routes