import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Product/>
          <Footer/>
        </div>
    );
  }
}

export default App;
