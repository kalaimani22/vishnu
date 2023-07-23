import test from './images/1.jpg'
import test1 from './images/2.jpg'
import test2 from './images/3.jpg'
import test3 from './images/4.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={test}  alt="logo" />
        <img src={test1}  alt="logo" />
        <img src={test2}  alt="logo" />
        <img src={test3}  alt="logo" />

      </header>
    </div>
  );
}

export default App;
