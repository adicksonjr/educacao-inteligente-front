
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './navbar';
import Router from './routes/routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <Router/>
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
