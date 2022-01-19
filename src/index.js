import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {OperatorContextProvider} from './store/OperatorStore';
import {CampaignContextProvider} from "./store/CampaignStore";

ReactDOM.render(
  <CampaignContextProvider>
      <OperatorContextProvider>
          <App />
      </OperatorContextProvider>
  </CampaignContextProvider>,
  document.getElementById('root')
);
