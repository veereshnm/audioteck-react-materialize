import React from "react";
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

function App() {
  React.useEffect(() => {
    M.AutoInit();
    console.log("Behavior before the component is added to the DOM");
  }, []);

  return (
    <div className="App">
      <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Audioteck</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="">About</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">Photos</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="">About</a></li>
    <li><a href="">Product</a></li>
    <li><a href="">Photos</a></li>
    <li><a href="">Contact</a></li>
  </ul>
    </div>
  );
}

export default App;
