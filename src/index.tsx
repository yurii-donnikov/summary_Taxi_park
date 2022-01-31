import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './main.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import './utils/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
