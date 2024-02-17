import React, { useEffect, useState } from 'react';
import PatientProfileCard from './PatientProfileCard';


const PatientProfilePage = () => {
  const [patientData, setPatientData] = useState(null);


  useEffect(() => {
    // Fetch patient data from your API or data source
    fetch('/api/patientprofiles') 
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setPatientData(data);
      });
  }, []);


  return (
    <div className="container">
      <h1>Patient Profiles</h1>
      {patientData && patientData.map((patient, index) => (
        <PatientProfileCard key={index} patient={patient} />
      ))}
    </div>
  );
};

export default PatientProfilePage;

