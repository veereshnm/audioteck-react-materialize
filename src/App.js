import React from "react";
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import recorderImg from "./images/recorder.jpg";


const intialProducts = [
  {
    title: 'Turn Table',
    description: '',
    productid: 100,
    parts: [
      {
        partsid: 101,
        title: 'CC1',
        description: 'All our products are made in USA, even though this is our entry level Turntable most of the components are sourced locally and the unit is assembled here in USA. Our CC1 turn table comprises of high-end components with highest quality which produces strong stereo image and in-depth detail between the speakers, this adds to a unique pleasure of listening. This creates a sensation of live  listening. The performance of this turntable will make you feel that this CC1 is worthy of praise',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 102,
        title: 'CC2',
        description: 'CC2 turn table comprises of high-end components with an option of Uni-pivot or a Gimble bearing Tonearm. Which produces strong stereo image and in-depth detail between the speakers, This creates a sensation of live  listening. The performance of this turntable will make you feel proud of owning such a high-quality equipment.',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 103,
        title: 'CC3',
        description: 'CC3 Turntable is the pinnacle between our most advanced turn table which can be fitted with any of the tonearms in our design. This turn table comprises of high-end components with highest quality which produces strong stereo image and in-depth detail between the speakers, this adds to a unique pleasure of listening. This creates a sensation of live listening.',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 104,
        title: 'CC4',
        description: 'CC4 Turn Table is the most advanced turntable built yet by TeckAudio which comprises of high-end components like  Sapphire bearing and fitted with our Platinum TA4 tone arm which produces highest quality strong stereo image and in-depth detail imaging between the speakers. This creates a sensation of live  listening.',
        features: '',
        specs: '',
        resources: ''
      }
    ]
  },
  {
    title: 'Tone Arm',
    description: '',
    productid: 200,
    parts: [
      {
        partsid: 201,
        title: 'Silver TA1',
        description: 'Tone arm is one of the unique design. The cartridge is held by 10 carbon fiber rods, and the tonearm pivots on a Unipivot ball point',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 202,
        title: 'Gold TA2',
        description: 'Tone arm is one of the ultimate design. The cartridge is held by 10 carbon fiber rods, and the tonearm pivots on a Unipivot ball point the and the Tonearm can be weight adjusted with high precision level.',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 203,
        title: 'Diamond TA3',
        description: 'Tone arm is one of the ultimate design. The cartridge is held by 10mm carbon fiber rods, and the tonearm pivots on a single ceramic or a Sapphire bearing immersed in an oil bath.',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 204,
        title: 'Platinum TA4',
        description: 'Tone arm is one of the ultimate design. The cartridge is held by 10 carbon fiber rods, and the tonearm pivots on a single ceramic or a Sapphire bearing immersed in an oil bath.',
        features: '',
        specs: '',
        resources: ''
      }
    ]
  },
  {
    title: 'Speaker Stand',
    description: '',
    productid: 300,
    parts: [
      {
        partsid: 301,
        title: 'Mantel 3',
        description: 'Is a 3 legged speaker stand with a height of 24 inch made up of solid Stainless Steel  and Aluminum the  speaker stand is a very advanced design which allows you to time align the  speaker to your required height. Because the stand is made up of  5/8 inch stainless solid rods these speaker stands are heavy and can carry heavy speakers up to 40 Lbs.',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 302,
        title: 'Mantel 4',
        description: 'Is a 4 legged speaker stand with a height of 24 inch made up of solid Stainless Steel  and Aluminum the  speaker stand is a very advanced design which allows you to time align the  speaker to your required height.Because the stand is made up of  5/8 inch stainless solid rods these speaker stands are heavy and can carry heavy speakers up to 50 Lbs',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 303,
        title: 'Subwoofer Base',
        description: '',
        features: '',
        specs: '',
        resources: ''
      }
    ]
  },
  {
    title: 'Accessories',
    description: '',
    productid: 400,
    parts: [
      {
        partsid: 401,
        title: 'Spikes',
        description: '',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 402,
        title: 'Vibration Iso Pads',
        description: '',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 403,
        title: 'Cable raisers',
        description: '',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 404,
        title: 'Platforms',
        description: '',
        features: '',
        specs: '',
        resources: ''
      },
      {
        partsid: 405,
        title: 'HiFi Racks',
        description: '',
        features: '',
        specs: '',
        resources: ''
      }
    ]
  }
];

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

const ProductList = ({products}) => {
  return products.map(item => (
    <div>
      <ProductCard product={item}></ProductCard>
    </div>
  ));
}

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={recorderImg} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{product.title}</span>
        <p>{product.description}</p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          {product.parts.map(prt => (
            <li class="tab"><a href={'#test'+prt.partsid}>{prt.title}</a></li>
          ))}
        </ul>
      </div>
      <div class="card-content grey lighten-4 large">
        {product.parts.map(prt => (
                    <div id={'test'+prt.partsid}>
                      <p>
                        {prt.description}                      
                      </p>
                    </div>
            ))
        }
        
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

const getAsyncProducts = () => {
  return Promise.resolve({data: {products: intialProducts}})
}


function App() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getAsyncProducts().then(result => {
      setProducts(result.data.products);
    });
    M.AutoInit();
    console.log("Behavior before the component is added to the DOM");
  }, []);

  return (
    <div className="App">
      <MainNav />
      <div className="container">
        <ProductList products={products}></ProductList>
      </div>
      <Footer />
    </div>
  );
}

export default App;
