import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceCard.css';


const ServiceCard = ({ title, text, link }) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100 card-custom">
                <div className="card-body card-body-custom">
                    <h5 className="card-title card-title-custom">{title}</h5>
                    <p className="card-text card-text-custom">{text}</p>
                    <Link to={link} className="btn btn-secondary btn-custom">View details &raquo;</Link>
                </div>
            </div>
        </div>
    );
};


export default ServiceCard;

