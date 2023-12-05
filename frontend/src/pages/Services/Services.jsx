import React from 'react';
// import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';

const Services = () => {
    return (
        <>
            <PageHeader title="Our Services" />
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-end mb-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4">
                                <h6 class="text-body text-uppercase mb-2">Our Services</h6>
                                <h1 class="display-6 mb-0">Installation And Maintenance</h1>
                            </div>
                        </div>
                        <div class="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
                            <a class="btn btn-primary py-3 px-5" href="/appointment">BOOK NOW</a>
                        </div>
                    </div>
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-light overflow-hidden h-100">
                                <img class="img-fluid" src="img/AcService.jpg" alt="" />
                                <div class="service-text position-relative text-center h-100 p-4">
                                    <h5 class="mb-3">Ac Service</h5>
                                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                    <a class="small" href="/serviceone">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-light overflow-hidden h-100">
                                <img class="img-fluid" src="img/service-2.jpg" alt="" />
                                <div class="service-text position-relative text-center h-100 p-4">
                                    <h5 class="mb-3">Ac Installation</h5>
                                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                    <a class="small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-light overflow-hidden h-100">
                                <img class="img-fluid" src="img/repair.jpg" alt="" />
                                <div class="service-text position-relative text-center h-100 p-4">
                                    <h5 class="mb-3">Repair and Maintenance</h5>
                                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                    <a class="small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-light overflow-hidden h-100">
                                <img class="img-fluid" src="img/service-4.jpg" alt="" />
                                <div class="service-text position-relative text-center h-100 p-4">
                                    <h5 class="mb-3">Wiring and installation</h5>
                                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                    <a class="small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-light overflow-hidden h-100">
                                <img class="img-fluid" src="img/service-5.jpg" alt="" />
                                <div class="service-text position-relative text-center h-100 p-4">
                                    <h5 class="mb-3">Tiling and Painting</h5>
                                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                    <a class="small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-light overflow-hidden h-100">
                                <img class="img-fluid" src="img/service-6.jpg" alt="" />
                                <div class="service-text position-relative text-center h-100 p-4">
                                    <h5 class="mb-3">Interior Design</h5>
                                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                    <a class="small" href="">READ MORE<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <AppointmentForm/>
        </>
    );
};

export default Services;