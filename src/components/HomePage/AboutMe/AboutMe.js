import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <>
            <h2 className="about-me-title">About Me</h2>
            <div className="about-me-container">

                <div className="description">
                    <p>An aspiring MERN Stack Developer. I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS,  Mongo DB. Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 2 years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                </div>

                <div className="accomplishment">
                    <div className="box">
                        <span className="number">1+</span>
                        <h5 className="box-desc">Years of <br /> Experience</h5>
                    </div>

                    <div className="box">
                        <span className="number">18+</span>
                        <h5 className="box-desc">Project <br /> Completed</h5>
                    </div>

                    <div className="box">
                        <span className="number">1+</span>
                        <h5 className="box-desc">Happy <br /> Clients</h5>
                    </div>

                    <div className="box">
                        <span className="number">1+</span>
                        <h5 className="box-desc">Award <br /> Won</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;