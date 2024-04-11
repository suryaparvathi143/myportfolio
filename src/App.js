import logo from './logo.svg';
import './App.css';

function App() {
  const numbers=[1,2,3,4,5];
  const numbersList=numbers.map((number)=>{
    return <li key={number}>{number}</li>;
  });
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js.This application is to print my portfolio</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{numbersList}</ul>
      </header>
    </div>
  );
}

export default App;
