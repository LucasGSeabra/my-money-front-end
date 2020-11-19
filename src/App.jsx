import PageHeader from './template/Header/'
import Sidebar from './template/Sidebar/'
import './App.css'

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <Sidebar />
        <PageHeader />
        <div className="content" />
      </div>
    </div>
  );
}

export default App;
