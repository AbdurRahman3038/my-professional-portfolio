import React from 'react';
import './ContactMe.css';
import emailjs from "emailjs-com";

const ContactMe = () => {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e);

        emailjs.sendForm('service_gdo80vq', 'template_i81kq3b', e.target, 'user_w33XimIO9NhipXHpQl86f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (

        <div className="contact">
            <h1 className="contact-me-title">Contact Me</h1>

            <div className="contact-container">

                <div className="contact-info-container">
                    <div>
                        <h4> Contact Info</h4>
                        <div className="contact-info">
                            <p> <i class="far fa-envelope"></i> abdurrahmann3038@gmail.com</p>
                            <p> <i class="fas fa-mobile-alt"></i> +8801876052367</p>
                            <p> <i class="fas fa-map-marker-alt"></i> Sector 10, Uttara Model Town, Dhaka, Bangladesh</p>
                        </div>

                    </div>

                    <div className="social-media">

                        <a href="https://github.com/AbdurRahman3038" rel="noreferrer" target="_blank">
                            <i className="fab fa-github"></i> </a>

                        <a href="https://www.linkedin.com/in/abdurrahman3038/" rel="noreferrer" target="_blank"> <i className="fab fa-linkedin-in"></i> </a>

                        <a href="https://web.facebook.com/abdurrahman3038/" rel="noreferrer" target="_blank"> <i className="fab fa-facebook-f"></i> </a>

                        <a href="https://www.instagram.com/arahman_alive/" rel="noreferrer"
                            target="_blank"> <i className="fab fa-instagram"></i> </a>

                    </div>
                </div>

                <div className="form-container">
                    <form onSubmit={sendEmail}>
                        <div className="row  mx-auto">

                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control input-area" placeholder="Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control input-area" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control input-area" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control input-area" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 submit-btn">
                                <input type="submit" className="btn send-message" value="Send Message"></input>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactMe;