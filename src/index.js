import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'flexboxgrid2/dist/flexboxgrid.css';
import 'normalize.css';
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

addLocaleData(ruLocaleData);

ReactDOM.render(
    <IntlProvider locale="ru">
      <App />
    </IntlProvider>,
    document.getElementById('root')
);
registerServiceWorker();
