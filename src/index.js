import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {OperatorContextProvider} from './store/OperatorStore';

ReactDOM.render(
  <OperatorContextProvider>
    <App />
  </OperatorContextProvider>,
  document.getElementById('root')
);
