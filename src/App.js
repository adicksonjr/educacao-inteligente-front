import './App.css';
import TopBar from './components/topbar';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Router/>
    </div>
  );
}

export default App;
