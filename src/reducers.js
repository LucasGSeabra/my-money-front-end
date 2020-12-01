import { combineReducers } from 'redux'
import dashboardReducer from './pages/Dashboard/dashboardReducer'
import billingCycleReducer from './pages/BillingCycle/billingCyclesReducer'
import { reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    billingCycle: billingCycleReducer,
    form: formReducer
})

export default rootReducer