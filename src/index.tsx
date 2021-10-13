import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './store/auth-context';
import {LayoutContextProvider} from './store/layout-context';
import {ChildModalContextProvider} from './store/childModal-context';
import {TimelineContextProvider} from './store/timeline-context';
import {ProjectContextProvider} from './store/project-context';

ReactDOM.render(
  <LayoutContextProvider>
    <TimelineContextProvider>
      <ProjectContextProvider>
        <AuthContextProvider>
          <ChildModalContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ChildModalContextProvider>
        </AuthContextProvider>
      </ProjectContextProvider>
    </TimelineContextProvider>
  </LayoutContextProvider>,
  document.getElementById('root'),
);
