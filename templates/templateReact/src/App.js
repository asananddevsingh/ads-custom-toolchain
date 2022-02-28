import customSvc from './customSvc.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={customSvc} className="App-logo" alt="welcome" />
        <h1>
          This is the customized template for
          <pre>React JS Application</pre>
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
