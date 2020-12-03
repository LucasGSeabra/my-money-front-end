import PageHeader from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Routes from './routes'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
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
}

export default App;
