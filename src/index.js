import React from 'react';
import ReactDOM from 'react-dom';
import BankApp from './components/BankApp';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={configureStore()}>
      <BankApp />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
