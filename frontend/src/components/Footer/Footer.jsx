import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from './../../store/slices/servicesSlice'

const Footer = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services)
    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    return (
        <div className="container-fluid bg-primary footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" data-aos="fade-up">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <img className='mb-4' src="/logo-light.svg" alt="Heat pump deep cleaning in Hawkesbay
Heat pump Lagging in Hawkesbay
Heat pump service and maintenance Hawkesbay*
Heat pump remote controller in Hawkesbay
Ventilation filters in Hawkesbay
Heat pump installations Hawkesbay
Heat pump Parts replacement Hawkesba
Heat pump Parts replacement in Hawkesbay
Heat pump Lid Hawkesbay
Chillers Servicing and cleaning  Hawkesbay
HRV Filters Replacement  Hawkesbay
DVS filter Replacement Hawkesbay
Smartvent Filter Replacement  Hawkesbay
Pest Control Services  Hawkesbay
Carpet Cleaning service  Hawkesbay
Oven Cleaning service in Hawkesbay
Gutter Cleaning service Hawkesbay" style={{ height: 50 }} />
                        {/* <h1 className="text-white"><i className="fab fa-xing me-3"></i>SERVICE X</h1> */}
                        <p>Welcome to ServiceX - Your Trusted Partner for Home and Commercial Services</p>
                        <div itemScope itemType="http://schema.org/Organization" className="d-flex pt-2">
                            {/* <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-twitter"></i></a> */}
                            <a itemProp="sameAs" className="btn btn-square btn-outline-light me-1" href="https://www.facebook.com/profile.php?id=61558935705606" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                            {/* <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-youtube"></i></a> */}
                            <a itemProp="sameAs" className="btn btn-square btn-outline-light me-1" href="https://www.instagram.com/servicex_nz/" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            {/* <a className="btn btn-square btn-outline-light me-0" href=""><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Address</h4>
                        <p><i className="fa fa-map-marker-alt me-3"></i>402 Lyndon Road West, Hastings 4122</p>
                        {/* <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p> */}
                        <p><i className="fa fa-envelope me-3"></i><a href="mailto:info@servicex.co.nz" style={{ color: '#bbb' }}>info@servicex.co.nz</a></p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Services</h4>
                        {
                            services.map(s =>
                                <Link key={s.serviceId} className="btn btn-link" to={"/service/" + s.serviceSlug}>{s.serviceName}</Link>
                            )
                        }
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Area we service </h4>
                        <span className="btn btn-link">Hastings</span>
                        <span className="btn btn-link">Napier</span>
                        <span className="btn btn-link">Taradale</span>
                        <span className="btn btn-link">Havelock North</span>
                        <span className="btn btn-link">Flaxmere</span>
                        <span className="btn btn-link">Haumoana</span>
                        <span className="btn btn-link">Puketapu</span>
                        <span className="btn btn-link">Central Hawkesbay</span>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <Link className="btn btn-link" to="/about">About Us</Link>
                        <Link className="btn btn-link" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link" to="/services">Our Services</Link>
                        <Link className="btn btn-link" to="/">Terms & Condition</Link>
                        <Link className="btn btn-link" to="/">Support</Link>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; {new Date().getFullYear()} <Link to="/">ServiceX</Link>, All Right Reserved.
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
