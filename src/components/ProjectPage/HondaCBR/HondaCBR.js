import Button from '@restart/ui/esm/Button';
import React from 'react';
import './HondaCBR.css';
import img1 from '../../../media/images/honda/honda-1.PNG';
import img2 from '../../../media/images/honda/honda-2.PNG';
import img3 from '../../../media/images/honda/honda-3.PNG';
import img4 from '../../../media/images/honda/honda-4.PNG';

const HondaCBR = () => {
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
                    <p className="project-description">This website is showing all bike related products and feature on the website. Customer review is added as well. Different Q/A is included very last of the website. Carousel is used to show different bkies.<br /> <br />

                        At a glance:</p>
                    <ul>
                        <li>Different Bike is featured with card</li>
                        <li>Q/A is added</li>
                        <li>Selling Progress is added</li>
                        <li>Bootstarp, CSS and HTML is used in this website</li>
                        <li>User experience is ensured</li>
                    </ul>

                    <div className="project-details-buttons">
                        <a href="https://honda-cbr-rahman.netlify.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>
                        <a href="https://github.com/AbdurRahman3038/honda-cbr" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default HondaCBR;