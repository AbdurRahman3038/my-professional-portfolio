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
            <div className="contact-me-container">
                <form onSubmit={sendEmail}>
                    <div className="row  mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info send-message" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactMe;