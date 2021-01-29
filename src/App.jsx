import React, { useEffect } from 'react'
import PageHeader from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Routes from './routes'
import { connect } from 'react-redux'
import Login from './pages/Login/'
import { validateToken } from './pages/Login/loginActions'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {

  useEffect(() => {
    if(props.validToken) {
      props.validateToken(props.user.token)
    } 
  }, [])

  if(props.user && props.validToken) {
    axios.defaults.headers.common['authorization'] = props.user.token
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
      <div className="App">
        <Login />
        <Alert />
      </div>
    )
  }   
}

const mapStateToProps = state => ({ validToken: state.login.validToken, user: state.login.user })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
