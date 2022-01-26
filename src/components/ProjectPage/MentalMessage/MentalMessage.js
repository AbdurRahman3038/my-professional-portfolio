import React from 'react';
import './MentalMessage.css';
import img1 from '../../../media/images/mental/mental-1.PNG';
import img2 from '../../../media/images/mental/mental-2.PNG';
import img3 from '../../../media/images/mental/mental-3.PNG';
import img4 from '../../../media/images/mental/mental-4.PNG';
import Button from '@restart/ui/esm/Button';

const MentalMessage = () => {
    return (
        <div>
            <h2 className="text-center project-title">Details of "Mental Message Consultation"</h2>
            <div className="oculus-container">
                <div className="project-images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className="description-section">
                    <p className="project-description">This is a website for a online service in healthcare sector. Our main focus is to reduce mental illness and free people from psychological problems. By Using this website service, anyone can book an appointment, free consultation etc. <br /> <br />

                        At a glance:</p>
                    <ul>
                        <li>Information about mental illness</li>
                        <li>Can book appointment for consultation</li>
                        <li>Can book free-seminar or consulatation</li>
                        <li>Acount Information</li>
                        <li>User Registration/Login</li>
                        <li>Google Login</li>
                    </ul>

                    <div className="project-details-buttons">
                        <a href="https://mental-message.netlify.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>
                        <a href="https://github.com/AbdurRahman3038/mental-message" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default MentalMessage;