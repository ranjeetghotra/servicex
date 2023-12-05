import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const AppointmentHeader = () => {
    const [formData, setFormData] = useState();
    const [isVerified, setIsVerified] = useState(false);

    // const handleRecaptchaChange = (value) => {
    //     // This function will be called when the user interacts with the reCAPTCHA widget
    //     setIsVerified(!!value);
    // };
    const handleSubmit = async (event) => {

        event.preventDefault();
        // handleRecaptchaChange()
        try {
            const response = await axios.post('https://webhook.site/92571f90-a5f4-4e7d-8a6d-ec5ccb2b73d5', formData);

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
                                            <input type="text" class="form-control bg-light border-0" id="name" onChange={handleInputChange} placeholder="Gurdian Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control bg-light border-0" id="gmail" onChange={handleInputChange} placeholder="Gurdian Email" />
                                            <label for="gmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" keyboardType="numeric" maxLength={10} class="form-control bg-light border-0" id="mobile" onChange={handleInputChange} placeholder="Child Name" />
                                            <label for="mobile">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">

                                            <label for="service"></label>
                                            <select id="service" style={{ padding: '1rem 0.75rem' }} class="form-control bg-light border-0" name="cars" onChange={handleInputChange} placeholder="Child Name">
                                                <option>Service Type</option>
                                                <option value="Ac Service">AC Service</option>
                                                <option value="Ac Installation">AC Installation</option>
                                                <option value="Repair And Maintainence">Repair & Maintainace</option>
                                                <option value="Heater">Other</option>
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
