
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeContextProvider } from '../src/components/Context/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider >
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <App />
          </HashRouter>
        </PersistGate>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
