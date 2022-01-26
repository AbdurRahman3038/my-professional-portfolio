import React from 'react';
import './MartialArt.css';
import img1 from '../../../media/images/martial/martial-1.PNG';
import img2 from '../../../media/images/martial/martial-2.PNG';
import img3 from '../../../media/images/martial/martial-3.PNG';
import img4 from '../../../media/images/martial/martial-4.PNG';
import Button from '@restart/ui/esm/Button';

const MartialArt = () => {
    return (
        <div>
            <h2 className="text-center project-title">Details of "Martial Art Training Center"</h2>
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
                        <li>Showed full view of UI of the website</li>
                        <li>Local JSON data is used to make card</li>
                        <li>API is used</li>
                        <li>React Router is used</li>
                        <li>Training details is added</li>
                        <li>Overall user experience of Martial Art Website</li>
                    </ul>

                    <div className="project-details-buttons">
                        <a href="https://martial-art-training.netlify.app/training" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>
                        <a href="https://github.com/AbdurRahman3038/martial-art-training-centre" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default MartialArt;