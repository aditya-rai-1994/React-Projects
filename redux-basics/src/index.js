import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
In order to wire up a redux/react app, we need react-redux
// we need to provider ReactComponent , to be around everything
*/
import {Provider} from 'react-redux';
// 2. Create a redux store , so the provider has a store!
import { createStore } from 'redux';
// 3. reducers to populate the store
// 3a. we always start with root reducers
// 4. make individual reducer to hand to rootreducer
import rootReducer from './reducers/rootReducer';
// 5. create the store, by passinf ythe root redcuder
const theStore = createStore(rootReducer);
// provider is the glue between react and redux , give it to the store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={theStore}>
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

