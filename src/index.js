import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import forecastReducer from './reducers/forecastReducer.js'
import watchFetchForecast from './saga/sagaWatcher'

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWrapper = () => {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    forecastReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchFetchForecast);


  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

root.render(
    <AppWrapper />
);
