import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientProfileCard.css';
import VisitCard from './VisitCard';



const PatientProfileCard = ({ patient }) => {
  const [visitDetails, setVisitDetails] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to fetch visit details based on visit IDs
  const fetchVisitDetails = async (visitIds) => {
    const visitDetailsPromises = visitIds.map(async (visitId) => {
      try {
        const response = await fetch(`/api/visits/${visitId}`);
        if (response.ok) {
          const visitData = await response.json();
          return visitData;
        }
      } catch (error) {
        console.error('Error fetching visit details:', error);
      }
      return null;
    });

    const visitDataList = await Promise.all(visitDetailsPromises);
    setVisitDetails(visitDataList.filter((visitData) => visitData !== null));
  };

  useEffect(() => {
    if (patient && patient.visits && Array.isArray(patient.visits)) {
      fetchVisitDetails(patient.visits);
    }
  }, [patient]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="card w-75 h-75">
      <div className="row">
        <div className="col-md-4">
          <img
            src={patient.image}
            className="card-img-top"
            alt={`${patient.first_name} ${patient.last_name}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {patient.first_name} {patient.last_name}
            </h5>
            {patient.user && (
              <p className="card-text">
                Doctor: {patient.user.first_name} {patient.user.last_name}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          <button
            className="btn btn-link btn-sm"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen ? 'true' : 'false'}
          >
            {isDropdownOpen ? 'Close Visits' : 'View Visits'}
          </button>
        </h6>
        {isDropdownOpen && (
          <div>
            {visitDetails.map((visit, index) => (
              <VisitCard key={index} visit={visit} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

PatientProfileCard.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default PatientProfileCard;
