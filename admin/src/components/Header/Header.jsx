import React from 'react';
import { logout } from '../../store/slices/authSlice';
import { useDispatch ,useSelector} from 'react-redux';
import {setToggled} from  './../../store/slices/headerSidebarSlice'
const Header = () => {
    const dispatch = useDispatch();
    const isToggled = useSelector((state)=>{
        return state.headerSidebar.isToggled
    })
    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button  onClick={()=>{
                dispatch(setToggled(!isToggled))
            }}  className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                    <span className="nav-link dropdown-toggle pe-pointer" role='button' onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt fa-fw"></i>
                    </span>
                </li>

            </ul>

        </nav>
    );
};

export default Header;
