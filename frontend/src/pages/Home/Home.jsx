import React, { useState,useEffect } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import { fetchServices } from '../../store/slices/servicesSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
      };

    const services = useSelector((state) => {
        return state.services.services;
    })
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchServices());
    }, []);
    const handleServiceClick = (serviceId)=>{
        navigate(`/service/${serviceId}`);
    }



    return (
        <>
            <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div className={isActive ? "carousel-item active" : "carousel-item"} >
                            <img class="w-100" src="img/ac.jpg" alt="Image" />
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-lg-10">
                                            <h5 class="text-light text-uppercase mb-3 animated slideInDown">Welcome to Apex</h5>
                                            <h1 class="display-2 text-light mb-3 animated slideInDown">Installation of Air Conditioners & Heat</h1>
                                            <ol class="breadcrumb mb-4 pb-2">
                                                <li class="breadcrumb-item fs-5 text-light">Commercial</li>
                                                <li class="breadcrumb-item fs-5 text-light">Residential</li>
                                                <li class="breadcrumb-item fs-5 text-light">Industrial</li>
                                            </ol>
                                            <a href="" class="btn btn-primary py-3 px-5">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={isActive ? "carousel-item " : "carousel-item active"}>
                            <img class="w-100" src="img/ac3.jpg" alt="Image" />
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-lg-10">
                                            <h5 class="text-light text-uppercase mb-3 animated slideInDown">Welcome to Apex</h5>
                                            <h1 class="display-2 text-light mb-3 animated slideInDown">Cleaning & Repairing Services</h1>
                                            <ol class="breadcrumb mb-4 pb-2">
                                                <li class="breadcrumb-item fs-5 text-light">Commercial</li>
                                                <li class="breadcrumb-item fs-5 text-light">Residential</li>
                                                <li class="breadcrumb-item fs-5 text-light">Industrial</li>
                                            </ol>
                                            <a href="" class="btn btn-primary py-3 px-5">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button  onClick={handleClick} class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button  onClick={handleClick} class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <img class="position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                                <div class="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }}>
                                    <div class="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                                        <h1 class="text-white">25</h1>
                                        <h2 class="text-white">Years</h2>
                                        <h5 class="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="h-100">
                                <div class="border-start border-5 border-primary ps-4 mb-5">
                                    <h6 class="text-body text-uppercase mb-2">About Us</h6>
                                    <h1 class="display-6 mb-0">Unique Solutions For Residentials & Industries!</h1>
                                </div>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div class="border-top mt-4 pt-4">
                                    <div class="row g-4">
                                        <div class="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.1s">
                                            <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                            <h6 class="mb-0">Ontime at services</h6>
                                        </div>
                                        <div class="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.3s">
                                            <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                            <h6 class="mb-0">24/7 hours services</h6>
                                        </div>
                                        <div class="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.5s">
                                            <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                            <h6 class="mb-0">Verified professionals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid my-5 p-0">
                <div class="row g-0">
                    <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="position-relative">
                            <img class="img-fluid w-100" src="img/fact-1.jpg" alt="" />
                            <div class="facts-overlay">
                                <h1 class="display-1">01</h1>
                                <h4 class="text-white mb-3">Construction</h4>
                                <p class="text-white">Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet</p>
                                <a class="text-white small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                        <div class="position-relative">
                            <img class="img-fluid w-100" src="img/fact-2.jpg" alt="" />
                            <div class="facts-overlay">
                                <h1 class="display-1">02</h1>
                                <h4 class="text-white mb-3">Mechanical</h4>
                                <p class="text-white">Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet</p>
                                <a class="text-white small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="position-relative">
                            <img class="img-fluid w-100" src="img/fact-3.jpg" alt="" />
                            <div class="facts-overlay">
                                <h1 class="display-1">03</h1>
                                <h4 class="text-white mb-3">Architecture</h4>
                                <p class="text-white">Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet</p>
                                <a class="text-white small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                        <div class="position-relative">
                            <img class="img-fluid w-100" src="img/fact-4.jpg" alt="" />
                            <div class="facts-overlay">
                                <h1 class="display-1">04</h1>
                                <h4 class="text-white mb-3">Interior Design</h4>
                                <p class="text-white">Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet</p>
                                <a class="text-white small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4 mb-5">
                                <h6 class="text-body text-uppercase mb-2">Why Choose Us!</h6>
                                <h1 class="display-6 mb-0">Our Specialization And Company Features</h1>
                            </div>
                            <p class="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div class="row gy-5 gx-4">
                                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 class="mb-0">Large number of services provided</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span>
                                </div>
                                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 class="mb-0">25+ years of professional experience</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span>
                                </div>
                                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 class="mb-0">A large number of grateful customers</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span>
                                </div>
                                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 class="mb-0">Always reliable and affordable prices</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <img class="position-absolute w-100 h-100" src="img/feature.jpg" alt="" style={{ objectFit: "cover" }} />
                                <div class="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }}>
                                    <div class="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                                        <h1 class="text-white">25</h1>
                                        <h2 class="text-white">Years</h2>
                                        <h5 class="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-end mb-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4">
                                <h6 class="text-body text-uppercase mb-2">Our Services</h6>
                                <h1 class="display-6 mb-0">Construction And Renovation Solutions</h1>
                            </div>
                        </div>
                        <div class="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
                            <a class="btn btn-primary py-3 px-5" href="">More Services</a>
                        </div>
                    </div>
                    <div class="row g-4 justify-content-center">
                    {
                            services.length && services.map(service=>{
                                return(
                                 
                                    <div key={service.serviceId} onClick={()=>{handleServiceClick(service.serviceId)}}  style={{cursor:"pointer"}}  className="col-lg-4 col-md-6 wow fadeInUp  " data-wow-delay="0.1s"  >
                                    <div className="service-item bg-light text-center overflow-hidden h-100    ">
                                        <img className=" equal-height-image" src={`${process.env.REACT_APP_API_BASE_URL}/static/${service.serviceImage}`} alt="" />
                                        <div className="service-text position-relative text-center h-100 p-4">
                                            <h5 className="mb-3">{service.serviceName}</h5>
                                            <p className='ellipses' >{service.serviceDescription}</p>
                                            <a className="small" to={`/service/${service.serviceId}`}>READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }

         
                    </div>
                </div>
            </div>

         <AppointmentForm title='Appointment'/>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-end mb-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4">
                                <h6 class="text-body text-uppercase mb-2">Our Team</h6>
                                <h1 class="display-6 mb-0">Our Expert Worker</h1>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item position-relative">
                                <img class="img-fluid" src="img/team-1.jpg" alt="" />
                                <div class="team-text bg-white p-4">
                                    <h5>Full Name</h5>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item position-relative">
                                <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                <div class="team-text bg-white p-4">
                                    <h5>Full Name</h5>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item position-relative">
                                <img class="img-fluid" src="img/team-3.jpg" alt="" />
                                <div class="team-text bg-white p-4">
                                    <h5>Full Name</h5>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4 mb-5">
                                <h6 class="text-body text-uppercase mb-2">Testimonial</h6>
                                <h1 class="display-6 mb-0">What Our Happy Clients Say!</h1>
                            </div>
                            <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div class="row g-4">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                                        <h1 class="ms-3 mb-0">123+</h1>
                                    </div>
                                    <h5 class="mb-0">Happy Clients</h5>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                                        <h1 class="ms-3 mb-0">123+</h1>
                                    </div>
                                    <h5 class="mb-0">Projects Done</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="owl-carousel testimonial-carousel">
                                <div class="testimonial-item">
                                    <img class="img-fluid mb-4" src="img/testimonial-1.jpg" alt="" />
                                    <p class="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <div class="bg-primary mb-3" style={{ width: "60px", height: "5px" }}></div>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div class="testimonial-item">
                                    <img class="img-fluid mb-4" src="img/testimonial-2.jpg" alt="" />
                                    <p class="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <div class="bg-primary mb-3" style={{ width: "60px", height: "5px" }}></div>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;