import React from 'react';
// import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {

    const [formData, setformData] = useState();

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await axios.post('https://webhook.site/92571f90-a5f4-4e7d-8a6d-ec5ccb2b73d5', formData);

            console.log('Data posted successfully:', response.data);
            // Perform further actions with the response data as needed
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setformData({ ...formData, [id]: value });
    }
    return (
        <>
            <PageHeader title="Contact Us" />
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="row g-4 align-items-center">
                                <div class="col-sm-6">
                                    <img class="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                                <div class="col-sm-6">
                                    <h3 class="mb-0">Full Name</h3>
                                    <p>Head of Sales</p>
                                    <h6>Contact Details</h6>
                                    <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
                                    <p class="mb-0">Call: +012 345 6789</p>
                                    <p class="mb-0">Email: sales@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="row g-4 align-items-center">
                                <div class="col-sm-6">
                                    <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                </div>
                                <div class="col-sm-6">
                                    <h3 class="mb-0">Full Name</h3>
                                    <p>Head of Marketing</p>
                                    <h6>Contact Details</h6>
                                    <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
                                    <p class="mb-0">Call: +012 345 6789</p>
                                    <p class="mb-0">Email: sales@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "450px" }}>
                            <div class="position-relative h-100">
                                <iframe class="position-relative w-100 h-100" title='Map Location'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98318.54618256209!2d176.73198804507103!3d-39.63948321781622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6851486a538aeb%3A0x500ef6143a29918!2sHastings%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1701162988172!5m2!1sen!2sin"
                                    frameborder="0" style={{ minHeight: "450px", border: 0 }} allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="border-start border-5 border-primary ps-4 mb-5">
                                <h6 class="text-body text-uppercase mb-2">Contact Us</h6>
                                <h1 class="display-6 mb-0">If You Have Any Query, Please Contact Us</h1>
                            </div>
                            <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0 bg-light" id="name" placeholder="Your Name" onChange={handleInputChange} />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control border-0 bg-light" id="email" placeholder="Your Email" onChange={handleInputChange} />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0 bg-light" id="subject" placeholder="Subject" onChange={handleInputChange} />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control border-0 bg-light" placeholder="Leave a message here" id="message" onChange={handleInputChange} style={{ height: "150px" }}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary py-3 px-5" onClick={handleSubmit} type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;