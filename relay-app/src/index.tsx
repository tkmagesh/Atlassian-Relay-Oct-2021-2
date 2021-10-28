import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './RelayEnvironment';
/* import App from './FetchThenRender/App';
import Users from './FetchThenRender/Users';
 */
import App from './RenderAsFetched/App';

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment} >
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
