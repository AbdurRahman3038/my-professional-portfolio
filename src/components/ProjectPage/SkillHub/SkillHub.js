import Button from '@restart/ui/esm/Button';
import React from 'react';
import './SkillHub.css';
import img1 from '../../../media/images/skillhub/skillhub-1.PNG';
import img2 from '../../../media/images/skillhub/skillhub-2.PNG';
import img3 from '../../../media/images/skillhub/skillhub-3.PNG';
import img4 from '../../../media/images/skillhub/skillhub-4.PNG';

const SkillHub = () => {
    return (
        <div>
            <h2 className="text-center project-title">Details of "SkillHub online Courses"</h2>
            <div className="oculus-container">
                <div className="project-images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className="description-section">
                    <p className="project-description">This is a website for a online courses in education sector. Our main focus is to provide education free in online. Simple add to cart is implimented here <br /> <br />

                        At a glance:</p>
                    <ul>
                        <li>Self made API used</li>
                        <li>Course Details viewed in card</li>
                        <li>No of courses, Total Amount Showed in cart</li>
                        <li>No of added course counted</li>
                        <li>Name of added course counted</li>
                        <li>Total price caltulated</li>
                    </ul>
                </div>

            </div>
            <div className="project-details-buttons">
                <a href="https://skillhub-online-courses.netlify.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>
                <a href="https://github.com/AbdurRahman3038/skillhub-online-courses" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>

            </div>
        </div>
    );
};

export default SkillHub;