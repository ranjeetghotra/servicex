import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setToggled } from '../../store/slices/headerSidebarSlice';

const Sidebar = () => {
    let { pathname } = useLocation();
    const isToggled = useSelector((state) => {
        return state.headerSidebar.isToggled
    })
    const dispatch = useDispatch()
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                dispatch(setToggled(true));
            }
        };
        // Initial call
        handleResize();
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    const closeMenu = () => {
        if (window.innerWidth <= 768) {
            dispatch(setToggled(false))
        }
    }
    return (
        <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion  ${isToggled ? "" : "d-none"} `} id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fab fa-xing"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Service X</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className={'nav-item ' + (pathname === '/' ? 'active' : '')}>
                <Link className="nav-link" to="/" onClick={closeMenu}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <li className={'nav-item ' + (pathname === '/appointment' ? 'active' : '')}>
                <Link className="nav-link" to="/appointment" onClick={closeMenu}>
                    <i className="fas fa-fw fa-calendar-alt"></i>
                    <span>Appointments</span></Link>
            </li>
            <li className={'nav-item ' + (pathname === '/contact' ? 'active' : '')}>
                <Link className="nav-link" to="/contacts" onClick={closeMenu}>
                    <i className="fas fa-fw fa-envelope"></i>
                    <span>Contacts</span></Link>
            </li>

            <li className={'nav-item ' + (pathname === '/service' ? 'active' : '')}>
                <Link className="nav-link" to="/service" onClick={closeMenu}>
                    <i className="fas fa-fw fa-tools"></i>
                    <span>Services</span></Link>
            </li>
            <li className={'nav-item ' + (pathname === '/holiday' ? 'active' : '')}>
                <Link className="nav-link" to="/holiday" onClick={closeMenu}>
                    <i className="fas fa-fw  fa-toggle-off"></i>
                    <span>Holidays</span></Link>
            </li>

        </ul>
    );
};

export default Sidebar;
