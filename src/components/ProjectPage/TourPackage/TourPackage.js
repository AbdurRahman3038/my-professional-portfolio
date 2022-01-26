import React from 'react';
import './TourPackage.css';
import img1 from '../../../media/images/tour/tour-1.PNG';
import img2 from '../../../media/images/tour/tour-2.PNG';
import img3 from '../../../media/images/tour/tour-3.PNG';
import img4 from '../../../media/images/tour/tour-4.PNG';
import Button from '@restart/ui/esm/Button';

const TourPackage = () => {
    return (
        <div>
            <h2 className="text-center project-title">Details of "Tour Package Planner"</h2>
            <div className="oculus-container">
                <div className="project-images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className="description-section">
                    <p className="project-description">This website is build with react, firebase, react bootstrap, react router, react hook form, heroku server deploy etc. By using this website, an user can book any tour package, can cancel the package and also view all booked tour package. And an admin can add new tour package, can manage all package like delete and confirm and also manage all bookings.<br /> <br />

                        At a glance:</p>
                    <ul>
                        <li>This a tour package arrraning website</li>
                        <li>Two user can use, User, Admin</li>
                        <li>User can book tour package</li>
                        <li>Admin can add tour package</li>
                        <li>Admin can manage bookings and tour packages</li>
                        <li>User can delete package</li>
                    </ul>

                    <div className="project-details-buttons">
                        <a href="https://tour-package-12fcb.web.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>
                        <a href="https://github.com/AbdurRahman3038/tour-package" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default TourPackage;