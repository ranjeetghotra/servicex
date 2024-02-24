import React, { useEffect } from 'react';
import Routes from './Routes';
import './App.scss';
import 'react-notifications/lib/notifications.css';
import "react-datepicker/dist/react-datepicker.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';

process.env.TZ = 'UTC'
const App = () => {

  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log('page change')
    AOS.init();
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: document.title });
  }, [location]);

  return <Routes />;
};

export default App;
