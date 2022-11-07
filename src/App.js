import './App.css';
import Home from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
