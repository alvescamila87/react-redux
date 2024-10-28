import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

//import App from './app'
import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route 
            path='/' 
            //component={App}
            component={AuthOrApp}
        >
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)