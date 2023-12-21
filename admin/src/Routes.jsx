import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BaseLayout from './components/BaseLayout/BaseLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import Appointments from './pages/Appointments/Appointments';
import Services from './pages/Services/Services';
import Service from './pages/Services/Service';
import Contacts from './pages/Contact/Contacts';
import Holidays from './pages/Holidays/Holidays';
import Holiday from './pages/Holidays/Holiday'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const AppRoutes = () => {

    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
        <Router>
            {/* <ScrollToTop /> */}
            <Routes>
                {
                    true || isLoggedIn ?
                        <>
                            <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
                            <Route path="/appointment" element={<BaseLayout><Appointments /></BaseLayout>} />
                            <Route path="/service" element={<BaseLayout><Services /></BaseLayout>} />
                            <Route path="/service/:id" element={<BaseLayout><Service /></BaseLayout>} />
                            <Route path="/contacts" element={<BaseLayout><Contacts /></BaseLayout>} />
                            <Route path="/holiday" element={<BaseLayout><Holidays /></BaseLayout>} />
                            <Route path="/holiday/:id" element={<BaseLayout><Holiday /></BaseLayout>} />
                            
                        </> :
                        <>
                            <Route path="/" element={<Login />} />
                        </>
                }
                {/* <Route path="/about" element={<BaseLayout><About /></BaseLayout>} />
                <Route path="/services" element={<BaseLayout><Services /></BaseLayout>} />
                <Route path="/appointment" element={<BaseLayout><Appointment /></BaseLayout>} />
                <Route path="/contact" element={<BaseLayout><Contact /></BaseLayout>} /> */}
                {/* <Route path="/404" element={<BaseLayout><NotFound /></BaseLayout>} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
