import apollo from './apollo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={apollo} className="App-logo" alt="welcome" />
        <h1>
          Welcome to the React App with
          <pre>Apollo Client</pre>
        </h1>
        <a
          className="App-link"
          href="https://www.npmjs.com/package/ads-custom-toolchain"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm registry
        </a>
      </header>
    </div>
  );
}

export default App;
