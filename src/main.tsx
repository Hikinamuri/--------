import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import ScrollToAnchor from './components/scroll';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToAnchor />
      <App />
    </HashRouter>
  </React.StrictMode>
);
