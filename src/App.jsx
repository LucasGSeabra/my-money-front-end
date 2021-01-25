import PageHeader from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Routes from './routes'
import { connect } from 'react-redux'
import Login from './pages/Login/'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  if(props.validToken) {
    return (
      <div className="App">
        <div className="grid-container">
          <PageHeader />
          <Sidebar />
          <div className="content">
            <Routes />
          </div>
          <Footer />
          <Alert />
        </div>
      </div>
    )
  } else {
    return (
      <Login />
    )
  }
  
}

const mapStateToProps = state => ({ validToken: state.login.validToken })
export default connect(mapStateToProps, null)(App)
