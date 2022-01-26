import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TopBanner.css';
import img from '../../../media/images/big.png';
import resume from '../../../media/files/Abdur Rahman_SCIC_Updated.pdf';
import { Typewriter } from 'react-simple-typewriter'


const TopBanner = () => {



    return (
        <div className="feature-container">
            <div className="feature-description">
                <h1 className="feature-text">
                    Hi, I'am <span className="top-name">Abdur Rahman </span> <br />
                </h1>

                <h3 className="typewriter-design"> A Professional
                    <span style={{ color: '#ff014f', paddingLeft:'7px' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Software Engineer', 'Programmer', 'Web Developer']}
                            loop={20}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h3>

                <Button href={resume} target="_blank" className="download-btn" download>Download Resume</Button>
            </div>
            <div className="feature-img">
                <img className="feature-image" src={img} alt="" />
            </div>
        </div>
    );
};

export default TopBanner;