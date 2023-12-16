import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from './../../services/axios';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from './../../store/slices/servicesSlice'
import { useParams } from 'react-router-dom';
const AppointmentHeader = () => {
    const initialFormData = {
        customerEmail:"",
        customerName:"",
        customerPhone:"",
        message:"",
        serviceId:""
    }
    const [formData, setFormData] = useState(initialFormData);
    const [isVerified, setIsVerified] = useState(false);
    const { serviceId } = useParams()
    const dispatch = useDispatch()
    const services = useSelector((state) => {
        return state.services.services;
    })
    useEffect(() => {

        //in future it will fetch only list of serviceId
        dispatch(fetchServices())
        setFormData({ ...formData, serviceId: serviceId ? serviceId : "" });

    }, [])
    // const handleRecaptchaChange = (value) => {
    //     // This function will be called when the user interacts with the reCAPTCHA widget
    //     setIsVerified(!!value);
    // };
    const handleSubmit = async (event) => {
        console.log(formData);

        event.preventDefault();
        // handleRecaptchaChange()
        try {
            const response = await axios.post('/appointment', formData);
            alert("Appointment Booked");
            setFormData(initialFormData);
            console.log('Data posted successfully:', response.data);
            // Perform further actions with the response data as needed
        } catch (error) {
            console.error('Error:', error);
        }

        if (isVerified) {
            // Your form submission logic here
            console.log('Form submitted successfully!');
        } else {
            // Show an error or prevent the form submission
            console.error('reCAPTCHA verification failed!');
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        console.log({
            serviceId, value
        })
        setFormData({ ...formData, [id]: value });
    }

    return (
        <>
            <div class="container-xxl py-5">

                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="border-start border-5 border-primary ps-4 mb-5">
                                <h6 class="text-body text-uppercase mb-2">Appointment</h6>
                                <h1 class="display-6 mb-0">A Company Involved In Service And Maintenance</h1>
                            </div>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        </div>
                        <div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" value={formData.customerName} class="form-control bg-light border-0" id="customerName" onChange={handleInputChange} placeholder="Gurdian Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="email" value={formData.customerEmail}  class="form-control bg-light border-0" id="customerEmail" onChange={handleInputChange} placeholder="Gurdian Email" />
                                            <label for="gmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" value={formData.customerPhone} keyboardType="numeric" maxLength={10} class="form-control bg-light border-0" id="customerPhone" onChange={handleInputChange} placeholder="Child Name" />
                                            <label for="mobile">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">

                                            <label for="service"></label>
                                            <select id="serviceId" value={formData.serviceId} style={{ padding: '1rem 0.75rem' }} class="form-control bg-light border-0" name="cars" onChange={handleInputChange} placeholder="Child Name">
                                                <option value="" >Service Type</option>
                                                {services.length && services.map(service => {
                                                    return <option key={service.serviceId} value={service.serviceId}>{service.serviceName}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control bg-light border-0" placeholder="Leave a message here" onChange={handleInputChange} id="message" style={{ height: "100px" }}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        {/* <GoogleReCaptchaProvider
                                  reCaptchaKey="6Ld2MR8pAAAAAJGOIESEJSIYy2zCB-8QtK1f6-pH"
                                  scriptProps={{
                                      async: false, // optional, default to false,
                                      defer: false, // optional, default to false
                                      appendTo: 'head', // optional, default to "head", can be "head" or "body",
                                      nonce: undefined // optional, default undefined
                                  }}
                              ></GoogleReCaptchaProvider> */}
                                        <button class="btn btn-primary w-100 py-3" onClick={handleSubmit} type="submit">Get Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default AppointmentHeader;
