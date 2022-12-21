import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'

import { store } from './app/store';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './app/assets/sass/main.scss'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <React.StrictMode>  
      <App />
    </React.StrictMode>
  </Provider>

);

serviceWorkerRegistration.register();
reportWebVitals();
