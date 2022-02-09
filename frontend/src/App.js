import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:8080/ping"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Backend API Respone
        </a>
      </header>
    </div>
  );
}

export default App;
