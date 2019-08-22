import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import createStore from './shared/store/configureStore';

const STORE = createStore();

const App = () => {
  return (
    <Provider store={STORE}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
