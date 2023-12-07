import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import { useRef } from 'react';

const FilterRefresh = () => {
    const myRef = useRef();

    const handleClick = () => {
        myRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <PageHeader title="Filter Refresh Services" breadcrumb={[{ title: 'Services', to: '/services' }]} />
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">

                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4 mb-5">
                                <h6 class="text-body text-uppercase mb-2">Why Choose Us!</h6>
                                <h1 class="display-6 mb-0">Filter Refresh Services</h1>
                                <button onClick={handleClick} class="btn btn-primary w-100 py-3" style={{ marginTop: '20px' }} type="submit">Get Appointment</button>
                            </div>
                            <p class="mb-5">
                                This AC service company surpasses expectations with unparalleled excellence. Boasting top-tier technicians skilled in diagnosing and repairing units flawlessly, they pair their expertise with premium products, ensuring optimal performance. Their commitment to quality service and superior equipment defines them as the pinnacle of reliability and efficiency.</p>
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
                            <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                                <img class="position-absolute w-100 h-100" src="img/AcService.jpg" alt="" style={{ objectFit: 'cover' }} />
                                <div class="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: '200px', height: '200px' }}>
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
                <div ref={myRef}> </div>
            </div>

            <AppointmentForm selectedservice="Child Name" />
        </>
    );
};

export default FilterRefresh;