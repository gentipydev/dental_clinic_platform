import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VisitCard.css';


const VisitCard = ({ visit }) => {
  return (
    <div className="visit-card mb-3">
      <div className="visit-card-body">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th>Date</th>
              <td>{visit.date}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{visit.description}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{visit.amount}</td>
            </tr>
            <tr>
              <th>Payment Method</th>
              <td>{visit.payment_method}</td>
            </tr>
            <tr>
              <th>Reference Number</th>
              <td>{visit.reference_number}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{visit.status}</td>
            </tr>
          </tbody>
        </table>
        {/* Add code to display visit attachments here */}
      </div>
    </div>
  );
};

VisitCard.propTypes = {
  visit: PropTypes.object.isRequired,
};

export default VisitCard;
