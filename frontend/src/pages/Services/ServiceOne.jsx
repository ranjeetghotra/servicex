import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
// import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import { useRef } from 'react';
import axios from './../../services/axios';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceOne = () => {
    const navigate = useNavigate()
    const myRef = useRef();
    const { serviceSlug } = useParams();
    const handleClick = () => {
        // myRef.current.scrollIntoView({ behavior: "smooth" });
        window.location.href = 'https://bookings.gettimely.com/servicex/bb/book';
    };
    const [serviceDetail, setServiceDetail] = useState({})
    useEffect(() => {
        getServiceDetail()
    }, [])

    const getServiceDetail = async () => {
        try {
            const response = await axios.get(`/admin/service/${serviceSlug}`);
            const data = await response.data;
            document.title = data?.service?.pageTitle ? data?.service?.pageTitle : `${data?.service?.serviceName} - ServiceX`
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', data?.service?.pageDescription || data?.service?.serviceDescription);
            }
            setServiceDetail(data?.service);
        }
        catch (error) {
            console.log(error.message);
            navigate('/services')
        }
    }
    const serviceImage = process.env.REACT_APP_API_BASE_URL + '/static/' + serviceDetail?.serviceImage
    return (
        <>
            <PageHeader title={serviceDetail?.serviceName} backgroundUrl={serviceImage} breadcrumb={[{ title: 'Services', to: '/services' }]} />
            <div className="container-xxl py-5" data-aos="fade-up" itemScope itemType="http://schema.org/Service">
                <div className="container">
                    <div className="row g-5">

                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Why Choose Us!</h6>
                                <h1 className="display-6 mb-0" itemProp="name">{serviceDetail.serviceName}</h1>
                                <button onClick={handleClick} className="btn btn-primary w-100 py-3" style={{ marginTop: '20px' }} type="button">Book Appointment</button>
                            </div>
                            <p itemProp="description" className="mb-5" style={{ whiteSpace: 'pre-line' }}>
                                {
                                    serviceDetail.serviceDescription
                                }
                            </p>
                            <div className="row gy-5 gx-4" style={{ whiteSpace: 'pre-line' }}>
                                {
                                    (serviceDetail.highlights ?? []).map(highlight =>
                                        <div key={highlight.title} className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="d-flex align-items-center mb-3">
                                                <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                                <h6 className="mb-0">{highlight.title}</h6>
                                            </div>
                                            <span>{highlight.description}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                                <img itemProp="image" className="position-absolute w-100 h-100" src={serviceImage} alt="Heat pump deep cleaning in Hawkesbay
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
Gutter Cleaning service Hawkesbay" style={{ objectFit: 'cover' }} />
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: '200px', height: '200px' }}>
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                                        <h1 className="text-white">5</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><div ref={myRef}> </div>
            </div>
            {
                // !!serviceDetail?.serviceId && <AppointmentForm serviceId={serviceDetail.serviceId} />
            }
        </>
    );
};

export default ServiceOne;