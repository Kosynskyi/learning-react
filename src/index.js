import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import {
  store,
  // persistor
} from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { theme } from './theme';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
