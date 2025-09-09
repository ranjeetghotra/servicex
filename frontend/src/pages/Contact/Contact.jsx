import React, { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import * as ReCaptcha from '../../services/recaptcha'
import PageHeader from '../../components/PageHeader/PageHeader';
import axios from './../../services/axios';


const Contact = () => {

    const initialFormValues = {
        customerEmail: "",
        customerName: "",
        subject: "",
        message: "",
        source: ""
    }
    const [formData, setFormData] = useState(initialFormValues);

    useEffect(() => {
        document.title = `Contact us - Service X NZ`
        ReCaptcha.loadScript()
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const token = await ReCaptcha.verifyCaptcha()
            await axios.post('/contact', { ...formData, token });
            NotificationManager.success('Message Sent Successfully');
            setFormData(initialFormValues)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }
    return (
        <>
            <PageHeader title="Contact Us" />
            <div className="container-xxl py-5" data-aos="fade-up">
                <div className="container">
                    <div className="row g-5">
                        {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="Service X NZ team member - Professional heat pump technician" />
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="mb-0">Full Name</h3>
                                    <p>Head of Sales</p>
                                    <h6>Contact Details</h6>
                                    <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
                                    <p className="mb-0">Call: +012 345 6789</p>
                                    <p className="mb-0">Email: sales@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="Service X NZ team member - HVAC specialist" />
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="mb-0">Full Name</h3>
                                    <p>Head of Marketing</p>
                                    <h6>Contact Details</h6>
                                    <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
                                    <p className="mb-0">Call: +012 345 6789</p>
                                    <p className="mb-0">Email: sales@example.com</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "450px" }} data-aos="fade-up">
                            <div className="position-relative h-100" >
                                <iframe className="position-relative w-100 h-100" title='Map Location'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.424256287841!2d176.834852076641!3d-39.640165540613545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d69ca3756ac6f59%3A0x4ca4909d0b8e087e!2s402%20Lyndon%20Road%20West%2C%20Hastings%204122%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1747587792466!5m2!1sen!2sin"
                                    style={{ minHeight: "450px", border: 0 }} allowFullScreen="" aria-hidden="false"
                                    tabndex="0"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" data-aos="fade-up">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Contact Us</h6>
                                <h1 className="display-6 mb-0">Get in Touch with Service X NZ</h1>
                            </div>
                            <div className="mb-4">
                                <p className="mb-2"><i className="fa fa-phone-alt me-2 text-primary"></i><a href="tel:0800444868" className="text-decoration-none">0800 444 868</a></p>
                            </div>
                            <p className="mb-4">Have a question or need information? Fill out the form below, and we'll get back to you as soon as possible.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" value={formData.customerName} className="form-control border-0 bg-light" id="customerName" placeholder="Your Name" onChange={handleInputChange} required />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" value={formData.customerEmail} className="form-control border-0 bg-light" id="customerEmail" placeholder="Your Email" onChange={handleInputChange} required />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formData.subject} className="form-control border-0 bg-light" id="subject" placeholder="Subject" onChange={handleInputChange} required />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select className="form-select border-0 bg-light" id="source" value={formData.source} onChange={handleInputChange} required>
                                                <option value="">Select where you heard about us</option>
                                                <option value="Google">Google</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Word of Mouth Referral">Word of Mouth Referral</option>
                                                <option value="Existing Customer">I'm an existing customer</option>
                                            </select>
                                            <label htmlFor="source">Where did you hear about us?</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" value={formData.message} id="message" onChange={handleInputChange} style={{ height: "150px" }} required></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
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