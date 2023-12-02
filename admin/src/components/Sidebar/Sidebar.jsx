import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    let { pathname } = useLocation();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Your logic when window width is less than 768
                // For example:
                collapseSidebar();
            }

            if (window.innerWidth < 480 && !document.body.classList.contains("sidebar-toggled")) {
                // Your logic when window width is less than 480 and sidebar is not toggled
                // For example:
                toggleSidebar();
                collapseSidebar();
            }
        };

        const collapseSidebar = () => {
            // Implement logic to collapse the sidebar
            // For example:
            const sidebarCollapse = document.querySelector('.sidebar .collapse');
            if (sidebarCollapse) {
                sidebarCollapse.classList.remove('show');
            }
        };

        const toggleSidebar = () => {
            // Implement logic to toggle the sidebar
            // For example:
            document.body.classList.add("sidebar-toggled");
            const sidebar = document.querySelector(".sidebar");
            if (sidebar) {
                sidebar.classList.add("toggled");
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
    // useEffect(() => {
    //     window.addEventListener('resize', function () {
    //         if (window.innerWidth < 768) {
    //             document.querySelector('.sidebar .collapse').classList.remove('show');
    //         }

    //         // Toggle the side navigation when window is resized below 480px
    //         if (window.innerWidth < 480 && !document.querySelector('.sidebar').classList.contains('toggled')) {
    //             document.body.classList.add('sidebar-toggled');
    //             document.querySelector('.sidebar').classList.add('toggled');
    //             document.querySelector('.sidebar .collapse').classList.remove('show');
    //         }
    //     });
    // }, [])
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

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
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Appointments</span></Link>
            </li>

        </ul>
    );
};

export default Sidebar;
