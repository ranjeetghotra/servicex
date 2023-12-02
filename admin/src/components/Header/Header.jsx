import React from 'react';
import { logout } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow mx-1">
                    <span class="nav-link dropdown-toggle pe-pointer" role='button' onClick={handleLogout}>
                        <i class="fas fa-sign-out-alt fa-fw"></i>
                    </span>
                </li>

            </ul>

        </nav>
    );
};

export default Header;
