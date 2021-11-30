import React from 'react';
import './OculusProject.css';
import img1 from '../../../media/images/oculus/oculus-1.PNG';
import img2 from '../../../media/images/oculus/oculus-2.PNG';
import img3 from '../../../media/images/oculus/oculus-3.PNG';
import img4 from '../../../media/images/oculus/oculus-4.PNG';
import Button from '@restart/ui/esm/Button';

const OculusProject = () => {
    return (
        <div>
            <h2 className="text-center project-title">Details of "Oculus Glassware Online Store"</h2>
            <div className="oculus-container">
                <div className="project-images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className="description-section">
                    <p className="project-description">This website is build with react, firebase, react bootstrap, react router, react hook form, heroku server deploy etc. By using this website, an user can buy any glassware, can cancel the order and also view all booked order. And an admin can add new glassware, can manage all order like delete and confirm and also manage all bookings. <br /> <br />

                        At a glance:</p>
                    <ul>
                        <li>This a online glassware website</li>
                        <li>Two user can use: User, Admin</li>
                        <li>User can buy glassware</li>
                        <li>Admin can add new glassware</li>
                        <li>Admin can manage orders and glassware</li>
                    </ul>
                </div>

            </div>
            <div className="project-details-buttons">
                <a href="https://glassware-store.web.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>
                <Button className="top-project-btn">Github</Button>
            </div>
        </div>
    );
};

export default OculusProject;