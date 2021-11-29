import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TopBanner.css';
import img from '../../../media/images/big.png';
import resume from '../../../media/files/Abdur Rahman_SCIC_Updated.pdf';

const TopBanner = () => {



    return (
        <div className="feature-container">
            <div className="feature-description">
                <h1 className="feature-text">
                    Hi, I'am <span className="top-name">Abdur Rahman</span> <br />
                    a Web Developer
                </h1>
                <p className="text-desc">
                    Web designer and developer working for envato.com in Paris, France.
                </p>
                <Button href={resume} target="_blank" className="download-btn" download>Download Resume</Button>
            </div>
            <div className="feature-img">
                <img className="feature-image" src={img} alt="" />
            </div>
        </div>
    );
};

export default TopBanner;