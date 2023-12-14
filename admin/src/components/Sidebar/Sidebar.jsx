import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {  setToggled } from '../../store/slices/headerSidebarSlice';
const Sidebar = () => {
    let { pathname } = useLocation();
    const isToggled = useSelector((state)=>{
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
    }, []);
    return (
        <ul class={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion  ${isToggled?"":"d-none"} ` } id="accordionSidebar">

            <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            <hr class="sidebar-divider my-0" />

            <li className={'nav-item ' + (pathname === '/' ? 'active' : '')}>
                <Link class="nav-link" to="/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr class="sidebar-divider" />

            <li className={'nav-item ' + (pathname === '/appointment' ? 'active' : '')}>
                <Link class="nav-link" to="/appointment">
                    <i class="fas fa-fw fa-calendar-alt"></i>
                    <span>Appointments</span></Link>
            </li>
            <li className={'nav-item ' + (pathname === '/contact' ? 'active' : '')}>
                <Link class="nav-link" to="/contacts">
                    <i class="fas fa-fw fa-calendar-alt"></i>
                    <span>Contacts</span></Link>
            </li>

            <li className={'nav-item ' + (pathname === '/service' ? 'active' : '')}>
                <Link class="nav-link" to="/service">
                    <i class="fas fa-fw fa-tools"></i>
                    <span>Services</span></Link>
            </li>

        </ul>
    );
};

export default Sidebar;
