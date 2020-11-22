import PageHeader from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Routes from './routes'

import './App.css'

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
      </div>
    </div>
  )
}

export default App;
