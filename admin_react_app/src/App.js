import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage'; 
import RegisterPage from './components/Register/RegisterPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import PatientProfilePage from './components/PatientProfiles/PatientProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
    return (
      <Router>
        <div className="App">
        <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        closeOnClick={true}
        />
          <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/dashboard" element={<DashboardPage />} />
              <Route exact path="/patientprofiles" element={<PatientProfilePage />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  
  