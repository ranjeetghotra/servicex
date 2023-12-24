import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from './../../store/slices/servicesSlice'

const Footer = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services)
    useEffect(() => {
        dispatch(fetchServices());
    }, []);
    return (
        <div class="container-fluid bg-primary footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h1 class="text-white mb-4"><i class="fab fa-xing me-3"></i>SERVICE X</h1>
                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-light me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Address</h4>
                        <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Services</h4>
                        {
                            services.map(s =>
                                <Link class="btn btn-link" to={"/service/" + s.serviceSlug}>{s.serviceName}</Link>
                            )
                        }
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Quick Links</h4>
                        <Link class="btn btn-link" to="/about">About Us</Link>
                        <Link class="btn btn-link" to="/contact">Contact Us</Link>
                        <Link class="btn btn-link" to="/services">Our Services</Link>
                        <Link class="btn btn-link" to="/">Terms & Condition</Link>
                        <Link class="btn btn-link" to="/">Support</Link>
                    </div>
                    {/* <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="container-fluid copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; {new Date().getFullYear()} <Link to="/">ServiceX</Link>, All Right Reserved.
                        </div>
                        {/* <div class="col-md-6 text-center text-md-end">
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
