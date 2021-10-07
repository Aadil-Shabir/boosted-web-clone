import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './store/auth-context';
import {LayoutContextProvider} from './store/layout-context';
import {ChildModalContextProvider} from './store/childModal-context';
import {TimelineContextProvider} from './store/timeline-context';

ReactDOM.render(
  <LayoutContextProvider>
    <TimelineContextProvider>
      <AuthContextProvider>
        <ChildModalContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChildModalContextProvider>
      </AuthContextProvider>
    </TimelineContextProvider>
  </LayoutContextProvider>,
  document.getElementById('root'),
);
