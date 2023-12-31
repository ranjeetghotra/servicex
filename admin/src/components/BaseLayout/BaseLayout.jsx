import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const BaseLayout = ({ children }) => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <div className="container-fluid">{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
