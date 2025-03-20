import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className="education-container" id="about">
            <div className="education-content">
                <h2 className="heading">ABOUT ME</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <h3 className="year">2024</h3>
                        <p>Completed internship in Full Stack Development at ABC Tech Solutions.</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="year">2024</h3>
                        <p>Graduated with a Master's degree in Computer Science from XYZ University.</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="year">2022</h3>
                        <p>Graduated with a Bachelor's degree in Information Technology from ABC University.</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="year">2019</h3>
                        <p>Completed Higher Secondary Education with a focus on Science.</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="year">2017</h3>
                        <p>Completed Secondary Education with distinction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
