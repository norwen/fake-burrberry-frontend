import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";

import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

addLocaleData(ruLocaleData);

class App extends Component {
  render() {
    return (
        <IntlProvider locale="ru">
          <div>
            <Header/>
            <Product/>
            <Footer/>
          </div>
        </IntlProvider>
    );
  }
}

export default App;
