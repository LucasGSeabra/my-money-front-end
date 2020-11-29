import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import BillingCycle from './pages/BillingCycle'

function Routes() {
    return (
        <HashRouter>
            <Route path="/" exact component={Dashboard} />
            <Route path="/billingCycles" component={BillingCycle} />
        </HashRouter>
    )
}

export default Routes