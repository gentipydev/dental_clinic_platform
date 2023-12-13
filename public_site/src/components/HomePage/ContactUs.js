import React from 'react';
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <div className="row align-items-start">
                {/* Address Information */}
                <div className="col-md-4">
                    <div className="contact-address">
                        <p>123 Dentist Street</p>
                        <p>Email: contact@dentistclinic.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                
                {/* Google Maps Embed */}
                {/* <div className="col-md-4">
                    <div className="map-container">
                        <iframe
                            title="Dentist Clinic Location"
                            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                            width="100%"
                            height="200" // Adjust height as needed
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div> */}
                
                {/* Appointment Button */}
                <div className="col-md-4">
                    <button className="btn btn-primary">Make an Appointment</button>
                </div>
            </div>
            
            {/* Card Row */}
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card fa-picture-o">
                        {/* <img src="" className="card-img-top" alt="Image description" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Place holder for picture</h5>
                        </div>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card fa-picture-o">
                        {/* <img src="" className="card-img-top" alt="Image description" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Place holder for picture</h5>
                        </div>
                    </div>
                </div>
                
                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card fa-picture-o">
                        {/* <img src="" className="card-img-top" alt="Image description" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Place holder for picture</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
