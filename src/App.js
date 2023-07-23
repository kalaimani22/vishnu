import test from "./images/1.jpg";
import test1 from "./images/2.jpg";
import test2 from "./images/3.jpg";
import test3 from "./images/4.jpg";
import logo from "./images/camera.png";
import wood from "./images/wood.png";

import "./App.css";

function App() {
  return (
    <div className="content">
      <div className="logo-wrap">
        <img src={logo} alt="logo" />
        <img src={wood} alt="wood" />
      </div>
      <div className="container">
        <ul className="logo-list">
          <li>
            <img src={test} alt="logo" />
          </li>
          <li>
            <img src={test1} alt="logo" />
          </li>
          <li>
            <img src={test2} alt="logo" />
          </li>
          <li>
            <img src={test3} alt="logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
