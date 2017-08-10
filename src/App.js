import React, {Component} from 'react';
import './App.css';
import Header from "./Header/index";
import Gallery from "./Product/Gallery/index";
import Info from "./Product/Info/index";
import Footer from "./Footer/index";
import Description from "./Product/Description/index";
import Delivery from "./Product/Delivery/index";
import Recommendations from "./Product/Recommendations/index";
import Shipping from "./Product/Shipping/index";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>

            <div className="row">
              <div className="col-xs-12 col-md-7">
                <Gallery/>
              </div>

              <div className="col-xs-12 col-md-5">
                <Info/>
              </div>
            </div>

            <hr className="blocks-delimiter"/>

            <div className="row">
              <Description/>
            </div>

            <hr className="blocks-delimiter"/>

            <div className="row">
              <Shipping/>
            </div>

            <Delivery/>

            <hr className="blocks-delimiter"/>

            <Recommendations/>
          </div>
          <Footer/>


        </div>
    );
  }
}

export default App;
