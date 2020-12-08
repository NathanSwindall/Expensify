import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import Page404 from '../components/Page404';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import HomePage from '../components/HomePage';
import PortfolioNum from '../components/PorfolioNum';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path='/contact' component={Contact} />
            <Route path='/portfolio' component={Portfolio} exact={true}/>
            <Route path='/portfolio/:id' component={PortfolioNum} />
            <Route component={Page404} />
        </Switch>
    </div> 
</BrowserRouter>
)



export default AppRouter