import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'

import BillingCycle from "../billingCycle/billingCycle";
import Dashboard from "../dashboard/dashboard";
//import Dashboard2 from "../dashboard2/dashboard2";

//com REDUX
export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}/>
        <Route path="/billingCycles" component={BillingCycle}/>
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