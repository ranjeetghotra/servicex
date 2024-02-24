import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NotificationContainer } from 'react-notifications';
import { Provider } from 'react-redux'
import { store } from './store'
import ReactGA from "react-ga4";
import { BrowserRouter } from 'react-router-dom';

// import reportWebVitals from './reportWebVitals';
ReactGA.initialize(`${process.env.REACT_APP_MEASUREMENT_ID}`);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
          <BrowserRouter>
               <App />
          </BrowserRouter>
          <NotificationContainer />
     </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
