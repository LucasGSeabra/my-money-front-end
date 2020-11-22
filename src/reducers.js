import { combineReducers } from 'redux'
import dashboardReducer from './pages/Dashboard/dashboardReducer'


const rootReducer = combineReducers({
    dashboard: dashboardReducer
})

export default rootReducer