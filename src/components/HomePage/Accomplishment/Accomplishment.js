import React from 'react';
import './Accomplishment.css';

const Accomplishment = () => {
    return (
        <>
            <h2 className="accomplishment-title">Accomplishment</h2>
            <div className="accomplishment-container">

                <div className="accomplishment-description">
                    <h4 className="quote">"Information is not Knowledge, The only source of knowledge is experience. You need experience to gain wisdom"</h4>
                    <h5 className="albert">-Albert Einstein</h5>
                </div>

                <div className="accomplishment">
                    <div className="box">
                        <span className="number">1+</span>
                        <h5 className="box-desc">Years of <br /> Experience</h5>
                    </div>

                    <div className="box">
                        <span className="number">18+</span>
                        <h5 className="box-desc">Project <br /> Completed</h5>
                    </div>

                    <div className="box">
                        <span className="number">1+</span>
                        <h5 className="box-desc">Happy <br /> Clients</h5>
                    </div>

                    <div className="box">
                        <span className="number">1+</span>
                        <h5 className="box-desc">Award <br /> Won</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accomplishment;