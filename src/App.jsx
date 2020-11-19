import PageHeader from './template/Header/'
import Sidebar from './template/Sidebar/'

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <Sidebar />
        <PageHeader />
      </div>
    </div>
  );
}

export default App;
