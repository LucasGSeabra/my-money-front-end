import PageHeader from './template/Header/'
import Sidebar from './template/Sidebar/'
import Footer from './template/Footer/'
import Routes from './routes'

import './App.css'

function App() {
  return (
    <div className="App">
      <div class="grid-container">
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
