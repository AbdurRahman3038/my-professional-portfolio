import React from 'react';
import './Skills.css';
import img1 from '../../../media/images/skills/html.png';
import img2 from '../../../media/images/skills/css.png';
import img3 from '../../../media/images/skills/bootstrap.png';
import img4 from '../../../media/images/skills/tailwaind.png';
import img5 from '../../../media/images/skills/JavaScript.png';
import img6 from '../../../media/images/skills/react.png';
import img7 from '../../../media/images/skills/metarial ui.png';
import img8 from '../../../media/images/skills/firebase.png';
import img9 from '../../../media/images/skills/github.png';
import img10 from '../../../media/images/skills/express.png';
import img11 from '../../../media/images/skills/node js.png';
import img12 from '../../../media/images/skills/mongodb.png';

const Skills = () => {
    return (
        <div>
            <h1 className="skill-title">My Expertise</h1>
            <div className="skill-container">

                <div className="skill-box">
                    <img src={img1} alt="" />
                    <h5 className="skill-desc">HTML</h5>
                </div>

                <div className="skill-box">
                    <img src={img2} alt="" />
                    <h5 className="skill-desc">CSS</h5>
                </div>

                <div className="skill-box">
                    <img src={img3} alt="" />
                    <h5 className="skill-desc">Bootstrap</h5>
                </div>

                <div className="skill-box">
                    <img src={img4} alt="" />
                    <h5 className="skill-desc">Tailwaind</h5>
                </div>

                <div className="skill-box">
                    <img src={img5} alt="" />
                    <h5 className="skill-desc">JavaScript</h5>
                </div>

                <div className="skill-box">
                    <img src={img6} alt="" />
                    <h5 className="skill-desc">React JS</h5>
                </div>

                <div className="skill-box">
                    <img src={img7} alt="" />
                    <h5 className="skill-desc">Metarial UI</h5>
                </div>

                <div className="skill-box">
                    <img src={img8} alt="" />
                    <h5 className="skill-desc">Firebase</h5>
                </div>

                <div className="skill-box">
                    <img src={img9} alt="" />
                    <h5 className="skill-desc">Github</h5>
                </div>

                <div className="skill-box">
                    <img src={img10} alt="" />
                    <h5 className="skill-desc">Express JS</h5>
                </div>

                <div className="skill-box">
                    <img src={img11} alt="" />
                    <h5 className="skill-desc">Node js</h5>
                </div>

                <div className="skill-box">
                    <img src={img12} alt="" />
                    <h5 className="skill-desc">MongoDB</h5>
                </div>
            </div>
        </div>
    );
};

export default Skills;