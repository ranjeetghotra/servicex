import "./Service.css"
import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
const Services = () => {
    const services = useSelector((state) => state.services.services)
    const navigate = useNavigate()

    const handleServiceClick = (serviceSlug) => {
        navigate(`/service/${serviceSlug}`);
    }
    useEffect(() => {
        document.title = `Heatpump service IN Hawkesbay Heat pump installations Hawkes bay Ventilation System Installation Hawkesbay Heat Pump Deep Clean IN Hawkesbay`
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Servicex offering Heatpump service IN Hawkesbay Heat pump installations Hawkes bay Ventilation System Installation Hawkesbay Heat Pump Deep Clean IN Hawkesbay servicex.co.nz");
        }
    }, [])
    return (
        <>
            <PageHeader title="Our Services" />
            <div className="container-xxl py-5" data-aos="fade-up">
                <div className="container">
                    <div className="row g-5 align-items-end mb-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4">
                                <h6 className="text-body text-uppercase mb-2">Commercial & Residential</h6>
                                <h1 className="display-6 mb-0">Discover Our Services</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
                            <a className="btn btn-primary py-3 px-5" href="/appointment">BOOK NOW</a>
                        </div>
                    </div>
                    <div itemScope itemType="http://schema.org/ItemList" className="row g-4 mt-5 justify-content-center" >

                        {
                            !!services.length && services.map(service => {
                                return (
                                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" key={service.serviceId} onClick={() => { handleServiceClick(service.serviceSlug) }} style={{ cursor: "pointer" }} className="col-lg-4 col-md-6 wow fadeInUp  " data-wow-delay="0.1s"  data-aos="fade-up">
                                        <div itemScope itemType="http://schema.org/Service" className="service-item bg-light text-center overflow-hidden h-100    ">
                                            <img itemProp="image" className=" equal-height-image" src={`${process.env.REACT_APP_API_BASE_URL}/static/${service.serviceImage}`} alt={`${service.serviceName} - Professional heat pump services by Service X NZ in Hawkes Bay`} />
                                            <div className="service-text position-relative text-center h-100 p-4">
                                                <h5 itemProp="name" className="mb-3">{service.serviceName}</h5>
                                                <p itemProp="description" className='ellipses' >{service.serviceDescription}</p>
                                                <Link className="small" to={`/service/${service.serviceSlug}`}>READ MORE<i className="fa fa-arrow-right ms-3"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

            <AppointmentForm />
        </>
    );
};

export default Services;