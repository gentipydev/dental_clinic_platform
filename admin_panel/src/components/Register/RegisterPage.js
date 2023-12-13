import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState([]);
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

    const togglePasswordVisibility1 = () => {
        setIsPasswordVisible1(!isPasswordVisible1);
    };

    const togglePasswordVisibility2 = () => {
        setIsPasswordVisible2(!isPasswordVisible2);
    };

    const navigate = useNavigate(); 


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password1 !== password2) {
            setErrors(['Passwords do not match']);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                email: email,
                password: password1,
                password2: password2,
            });
            console.log(response.data); // Handle the response appropriately

            // Redirect to dashboard
            navigate('/');

        } catch (error) {
            console.error('Registration error', error.response ? error.response.data : error);
            if (error.response && error.response.data) {
                setErrors(["This email is already in use"]);
            } else {
                setErrors([error.message]);
            }
        }
    };

    return (
        <div id="form-container">
            <form onSubmit={handleSubmit}>
                <h5 className="fw-normal mb-3 pb-3">
                    Register for an account
                </h5>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        className="register-form-control"
                        placeholder="Name"  
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="surname" 
                        name="surname"
                        className="register-form-control"
                        placeholder="Surname"  
                        value={surname} 
                        onChange={(e) => setSurname(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className="register-form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <div style={{ position: 'relative' }}>
                        <input 
                            type={isPasswordVisible1 ? 'text' : 'password'}
                            id="password1" 
                            name="password1"
                            className="register-form-control"
                            placeholder="Password" 
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            required 
                        />
                        <span 
                            onClick={togglePasswordVisibility1}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                        >
                            <i className={isPasswordVisible1 ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ position: 'relative' }}>
                        <input 
                            type={isPasswordVisible2 ? 'text' : 'password'}
                            id="password2" 
                            name="password2"
                            className="register-form-control"
                            placeholder="Confirm Password" 
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required 
                        />
                        <span 
                            onClick={togglePasswordVisibility2}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                        >
                            <i className={isPasswordVisible2 ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </span>
                    </div>
                </div>
                <input type="submit" id="submit-button" value="Register" />
                {errors.map((error, index) => (
                    <p key={index} style={{ color: 'red' }}>{error}</p>
                ))}
            </form>
        </div>
    );
};

export default RegisterPage;
