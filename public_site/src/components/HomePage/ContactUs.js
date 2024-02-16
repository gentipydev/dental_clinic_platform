import React from 'react';
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h2>Contattaci</h2>
            <div className="row align-items-start">
                {/* Address Information */}
                <div className="col-md-4">
                    <div className="contact-address">
                        <p>123 Dentist Street</p>
                        <p>Email: contact@dentistclinic.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary">Prenota un appuntamento</button>
                </div>
            </div>
            
            {/* Card Row */}
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card fa-picture-o">
                        <img src="/images/image0.jpeg" className="card-img-top" alt="Image description" />
                        {/* <div className="card-body">
                            <h5 className="card-title">Entrata</h5>
                        </div> */}
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card fa-picture-o">
                        <img src="/images/image1.jpg" className="card-img-top" alt="Image description" />
                        {/* <div className="card-body">
                            <h5 className="card-title">Ambiente Comfortevole e< amichevole/h5>
                        </div> */}
                    </div>
                </div>
                
                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card fa-picture-o">
                        <img src="/images/image2.jpeg" className="card-img-top" alt="Image description" />
                        {/* <div className="card-body">
                            <h5 className="card-title">Place holder for picture</h5>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
