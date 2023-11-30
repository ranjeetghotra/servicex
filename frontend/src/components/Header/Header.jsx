import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array means this effect runs once on mount
  
    const stickyTopClass = `navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ${isScrolled ? 'shadow-sm' : ''}`;
    return (
        <>
            <div class="container-fluid bg-light p-0">
                <div class="row gx-0 d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center border-start border-end px-3">
                            <small class="fa fa-phone-alt me-2"></small>
                            <small>+012 345 6789</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center border-end px-3">
                            <small class="far fa-envelope-open me-2"></small>
                            <small>info@example.com</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center border-end px-3">
                            <small class="far fa-clock me-2"></small>
                            <small>Mon - Fri : 09 AM - 09 PM</small>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="h-100 d-inline-flex align-items-center">
                            <a class="btn btn-square border-end border-start" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square border-end" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square border-end" href=""><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-square border-end" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={stickyTopClass} style={{ top: isScrolled ? '0px' : '-100px' }}>
                <a href="index.html" class="navbar-brand d-flex align-items-center">
                    <h1 class="m-0"><i class="fa fa-building text-primary me-3"></i>APEX</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-3 py-lg-0">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/about" class="nav-item nav-link">About Us</Link>
                        <Link to="/services" class="nav-item nav-link">Our Services</Link>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu bg-light m-0">
                                <a href="feature.html" class="dropdown-item">Features</a>
                                <a href="appointment.html" class="dropdown-item">Appointment</a>
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <Link to="/contact" class="nav-item nav-link">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;