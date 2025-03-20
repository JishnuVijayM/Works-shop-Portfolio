import React from 'react';
import './Home.css';
import user from '../images/user.webp'

function Home() {
    return (
        <div className="intro-container">
            <div className="intro-content">
                <div className="intro-text">
                    <h1 className="intro-heading">Welcome to Our Website</h1>
                    <h2 className="intro-subheading">Your One-Stop Solution for Web Development</h2>
                    <p className="intro-description">
                        We specialize in building modern, scalable, and responsive web applications.
                        Our expertise includes front-end and back-end technologies to deliver the best digital experiences.
                    </p>
                </div>

            </div>
            <div >
                <img className="userImg" src={user} alt="User" />
            </div>
        </div>
    );
}

export default Home;
