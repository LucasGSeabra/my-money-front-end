import PageHeader from './template/Header/'
import Sidebar from './template/Sidebar/'
import Footer from './template/Footer/'
import './App.css'

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <PageHeader />
        <Sidebar />
        <div className="content" />
        <Footer />
      </div>
    </div>
  )
}

export default App;
