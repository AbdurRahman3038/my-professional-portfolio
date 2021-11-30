import React from 'react';
import './About.css';
import img from '../../../media/images/me.JPG';

const About = () => {
    return (
        <div>
            <h2 className="about-me-title">About Me</h2>
            <div className="about-me-container">

                <div className="description">
                    <p> I belive in continous change, technology is the main driver to change the world. I was confused that I will participate of this change or not. But finally, i decided to overcome my challenges and started to learn. <br /> <br />
                        Now I am a professional web designer and developer. Recently I have completed a course on React and Node. Now I have expertise on Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS, Mongo DB.</p>
                </div>
                <div>
                    <img className="my-image" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;