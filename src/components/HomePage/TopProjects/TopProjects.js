import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TopProjects.css';
import img1 from '../../../media/images/oculus.PNG';
import img2 from '../../../media/images/honda-cbr.PNG';
import img3 from '../../../media/images/mental-message.PNG';
import img4 from '../../../media/images/martial-art.PNG';
import img5 from '../../../media/images/tour-package.PNG';
import img6 from '../../../media/images/skillhub.PNG';

const TopProjects = () => {
    return (
        <>
            <h1 className="text-center my-4">Projects</h1>

            <div className="project-container">

                <div className="project">
                    <img className="project-img" src={img1} alt="" />
                    <div className="buttons">
                        <Button>Live Site</Button>
                        <Button>Github</Button>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img3} alt="" />
                    <div className="buttons">
                        <Button>Live Site</Button>
                        <Button>Github</Button>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img6} alt="" />
                    <div className="buttons">
                        <Button>Live Site</Button>
                        <Button>Github</Button>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img4} alt="" />
                    <div className="buttons">
                        <Button>Live Site</Button>
                        <Button>Github</Button>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img5} alt="" />
                    <div className="buttons">
                        <Button>Live Site</Button>
                        <Button>Github</Button>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img2} alt="" />
                    <div className="buttons">
                        <Button>Live Site</Button>
                        <Button>Github</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopProjects;