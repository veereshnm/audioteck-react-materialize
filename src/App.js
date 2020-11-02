import React from "react";
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import recorderImg from "./images/recorder.jpg";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Teck Audio</h5>
            <p class="grey-text text-lighten-4">TeckAudio is happy to serve you!! Thanks for visiting our website!.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            {/* <h5 class="white-text">Links</h5> */}
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Product</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Photos</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2020 Copyright Reserved - Audio Teck
            {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
        </div>
      </div>
    </footer>
  );
}

const ProductsDesc = () => {
  return (
    <div>
      <h4>
        All our products are made in USA, even though this is our entry level Turntable most of the components are sourced locally and the unit is assembled here in USA.
      </h4>
      <h4>
        Our CC1 turn table comprises of high-end components with highest quality which produces strong stereo image and in-depth detail between the speakers, this adds to a unique pleasure of listening. This creates a sensation of live  listening. The performance of this turntable will make you feel that this CC1 is worthy of praise.
      </h4>
    </div>
  );
}

const ProductCard = ({ title, desc }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={recorderImg} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{desc}</p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a href="#test1">CC1</a></li>
          <li class="tab"><a class="active" href="#test2">CC2</a></li>
          <li class="tab"><a href="#test3">CC3</a></li>
          <li class="tab"><a href="#test4">CC4</a></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4 large">
        <div id="test1">
          <p>
            Our CC1 turn table comprises of high-end components with highest quality which produces strong stereo image and in-depth detail between the speakers, this adds to a unique pleasure of listening. This creates a sensation of live  listening. The performance of this turntable will make you feel that this CC1 is worthy of praise.
        </p>
        </div>
        <div id="test2">
          <p>
            CC2 turn table comprises of high-end components with an option of Uni-pivot or a Gimble bearing Tonearm. Which produces strong stereo image and in-depth detail between the speakers, This creates a sensation of live  listening. The performance of this turntable will make you feel proud of owning such a high-quality equipment.
        </p>
        </div>
        <div id="test3"></div>
        <div id="test4"></div>
      </div>
    </div>
  );
}

const MainNav = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Teck Audio</a>
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

function App() {
  React.useEffect(() => {
    M.AutoInit();
    console.log("Behavior before the component is added to the DOM");
  }, []);

  return (
    <div className="App">
      <MainNav />
      <div className="container">
        <ProductCard title="Turn Table" desc="All our products are made in USA, even though this is our entry level Turntable most of the components are sourced locally and the unit is assembled here in USA" />
        <ProductCard title="Tone Arm" desc="All our products are made in USA, even though this is our entry level Turntable most of the components are sourced locally and the unit is assembled here in USA" />
        <ProductCard title="Speaker Stand" desc="All our products are made in USA, even though this is our entry level Turntable most of the components are sourced locally and the unit is assembled here in USA" />
        <ProductCard title="Accessories" desc="All our products are made in USA, even though this is our entry level Turntable most of the components are sourced locally and the unit is assembled here in USA" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
