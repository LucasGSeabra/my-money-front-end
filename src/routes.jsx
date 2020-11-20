import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import BillingCycle from './pages/BillingCycle'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard} />
            <Route path="/billingCycles" component={BillingCycle} />
        </BrowserRouter>
    )
}

export default Routes