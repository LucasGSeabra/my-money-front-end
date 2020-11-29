import { combineReducers } from 'redux'
import dashboardReducer from './pages/Dashboard/dashboardReducer'
import billingCycleReducer from './pages/BillingCycle/billingCyclesReducer'


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    billingCycle: billingCycleReducer
})

export default rootReducer