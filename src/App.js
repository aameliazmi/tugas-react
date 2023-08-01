import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Name } from './components/Name';

function App() {
  return (
    <div class="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='Name' element={<Name/>}></Route>
        </Routes>
      </header>
    </div>
    
  );
}
export default App;
