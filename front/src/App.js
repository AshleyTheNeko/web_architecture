import logo from './logo.svg';
import Bar from './Navbar/Bar';
import './Style/App.css';

function App() {
  return (
    <div className="App">
      <Bar/>
      <div className="App-page">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
