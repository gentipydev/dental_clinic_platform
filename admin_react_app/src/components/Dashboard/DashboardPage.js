import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardPage.css';
import EditableCell from './EditableCell';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const DashboardPage = () => {
    const [patients, setPatients] = useState([]);


    const handleFieldChange = (index, fieldName, newValue) => {
        console.log(`Updating patient at index ${index} field ${fieldName} to ${newValue}`);
        const updatedPatients = [...patients];
        updatedPatients[index] = { ...updatedPatients[index], [fieldName]: newValue };
        setPatients(updatedPatients);
        // You would also handle updating the backend here
    };
    
    const handleEditPatient = (patient) => {
        // Your logic for handling the edit action
    };
    

    const handleDeletePatient = (patientId) => {

        const accessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');

        console.log(`Access Token ${accessToken}`);

        fetch(`/api/patients/${patientId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => {
            if (response.ok) {
                // Update the state to remove the deleted patient
                setPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
                console.log(`Deleted patient with id ${patientId}`);
            } else {
                // Handle error response
                console.error('Error deleting patient:', response);
                toast.error('Error deleting patient');
            }
        })
        .catch(error => console.error('Error:', error));
    };
    


    function formatDate(dateString) {
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    
        const date = new Date(dateString);
        const datePart = date.toLocaleDateString(undefined, dateOptions);
        const timePart = date.toLocaleTimeString(undefined, timeOptions);
    
        return `${datePart}, ${timePart}`;
    }
    

    useEffect(() => {
        fetch('/api/patients')
            .then(response => response.json())
            .then(data => setPatients(data));
    }, []);

    console.log("Patients just before rendering:", patients);


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/patientprofiles" className="nav-link">
                            My Patients
                        </Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="{% url 'users:login' %}">Home</a>
                        </li>
                    </ul>
                        <form className="d-flex ms-auto" role="search" method="get" action="{% url 'users:search_transactions' %}">
                        <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" name="q"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="{% url 'users:logout' %}">Logout</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="table-responsive mt-3">
                <table className="table table-light table-hover">
                <thead>
                        <tr>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Treatment Provided</th>
                            <th scope="col">Medical History/Notes</th>
                            <th scope="col">Total to Pay</th>
                            <th scope="col">Payment Status</th>
                            <th scope="col">Reference</th>
                            <th scope="col">Attachments</th>
                            <th scope="col">Modify</th>
                            <th scope="col">Delete</th>
                        </tr>
                </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient.id}>
                                <td>
                                    <EditableCell
                                        text={patient.name}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'name', newText)}
                                    />
                                </td>
                                <td>
                                <EditableCell
                                    text={formatDate(patient.appointment_date)}
                                    type="datetime"
                                    onTextChange={(newText) => handleFieldChange(index, 'appointmentDate', newText)}
                                />
                                </td>
                                <td>
                                    <EditableCell
                                        text={patient.treatment_provided}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'treatmentProvided', newText)}
                                    />
                                </td>
                                <td>
                                    <EditableCell
                                        text={patient.medical_history_notes}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'medicalHistoryNotes', newText)}
                                    />
                                </td>
                                <td>
                                    <EditableCell
                                        text={patient.total_to_pay}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'totalToPay', newText)}
                                    />
                                </td>
                                <td>
                                    <EditableCell
                                        text={patient.payment_status}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'paymentStatus', newText)}
                                    />
                                </td>
                                <td>
                                    <EditableCell
                                        text={patient.reference_number}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'referenceNumber', newText)}
                                    />
                                </td>
                                <td>
                                    <EditableCell
                                        text={patient.attachments}
                                        type="text"
                                        onTextChange={(newText) => handleFieldChange(index, 'attachments', newText)}
                                    />
                                </td>
                                <td className="text-left">
                                <button className="btn btn-primary btn-block modify-button" onClick={() => handleEditPatient(patient)}>Modify</button>
                                </td>
                                <td className="text-left">
                                    <button className="btn btn-danger btn-block delete-button-light" onClick={() => handleDeletePatient(patient.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPage;
