import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import img1 from '../../media/images/oculus.PNG';
import img2 from '../../media/images/honda-cbr.PNG';
import img3 from '../../media/images/mental-message.PNG';
import img4 from '../../media/images/martial-art.PNG';
import img5 from '../../media/images/tour-package.PNG';
import img6 from '../../media/images/skillhub.PNG';

const Projects = () => {
    return (
        <>
            <h2 className="text-center all">Projects</h2>
            <div className="project-container">

                <div className="project">
                    <img className="project-img" src={img1} alt="" />
                    <h5 className="text-center mt-3">Oculus Glassware Store</h5>
                    <div className="buttons">
                        <a href="https://glassware-store.web.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>

                        <Link to="/oculus-project"> <Button className="details-btn">Details</Button></Link>

                        <a href="https://github.com/AbdurRahman3038/oculus-glassware-online-store-client" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img3} alt="" />
                    <h5 className="text-center mt-3">Mental Message Consultant</h5>

                    <div className="buttons">
                        <a href="https://mental-message.netlify.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>

                        <Link to="/mental-message"> <Button className="details-btn">Details</Button></Link>

                        <a href="https://github.com/AbdurRahman3038/mental-message" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img6} alt="" />
                    <h5 className="text-center mt-3">SkillHub Online Course</h5>
                    <div className="buttons">
                        <a href="https://skillhub-online-courses.netlify.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>

                        <Link to="/skill-hub"> <Button className="details-btn">Details</Button></Link>

                        <a href="https://github.com/AbdurRahman3038/skillhub-online-courses" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img4} alt="" />
                    <h5 className="text-center mt-3">Martial Art Training</h5>
                    <div className="buttons">
                        <a href="https://martial-art-training.netlify.app/training" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>

                        <Link to="/martial-art"> <Button className="details-btn">Details</Button></Link>

                        <a href="https://github.com/AbdurRahman3038/martial-art-training-centre" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img5} alt="" />
                    <h5 className="text-center mt-3">Tour Package planner</h5>
                    <div className="buttons">
                        <a href="https://tour-package-12fcb.web.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>

                        <Link to="/tour-package"> <Button className="details-btn">Details</Button></Link>

                        <a href="https://github.com/AbdurRahman3038/tour-package" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-img" src={img2} alt="" />
                    <h5 className="text-center mt-3">Honda CBR Store</h5>
                    <div className="buttons">
                        <a href="https://honda-cbr-rahman.netlify.app/" rel="noreferrer" target="_blank"><Button className="top-project-btn">Live Site</Button></a>

                        <Link to="/honda-cbr"> <Button className="details-btn">Details</Button></Link>

                        <a href="https://github.com/AbdurRahman3038/honda-cbr" rel="noreferrer" target="_blank"><Button className="top-project-btn">Github</Button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;