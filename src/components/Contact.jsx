import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h1 className="contact-heading">CONTACT</h1>
            <div className="contact-card">
                <div className="contact-details">
                    <div className="contact-item">
                        <strong>Name:</strong>
                        <span>John Doe</span>
                    </div>
                    <div className="contact-item">
                        <strong>Email:</strong>
                        <span>johndoe@example.com</span>
                    </div>
                    <div className="contact-item">
                        <strong>Location:</strong>
                        <span>New York, USA</span>
                    </div>
                    <div className="contact-item">
                        <strong>Phone:</strong>
                        <span>+1 234 567 8901</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
