import { combineReducers } from 'redux'
import dashboardReducer from './pages/Dashboard/dashboardReducer'
import billingCycleReducer from './pages/BillingCycle/billingCyclesReducer'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import loginReducer from './pages/Login/loginReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    login: loginReducer
})

export default rootReducer