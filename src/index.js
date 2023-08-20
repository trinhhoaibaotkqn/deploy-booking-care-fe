import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './styles/Global.scss';
import { store, persistor } from "./store/store";
// import { store } from "./store/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);