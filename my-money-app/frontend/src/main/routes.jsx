import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import BillingCycle from "../billingCycle/billingCycle";
import Dashboard from "../dashboard/dashboard";
//import Dashboard2 from "../dashboard2/dashboard2";

//com REDUX
export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="billingCycles" component={BillingCycle}/>
        </Route>        
        <Redirect from="*" to="/" />
    </Router>
)

// sem REDUX
// export default props => (
//     <Router history={hashHistory}>
//         <Route path="/" component={Dashboard2}/>
//         <Route path="/billingCycles" component={BillingCycle}/>
//         <Redirect from="*" to="/" />
//     </Router>
// )