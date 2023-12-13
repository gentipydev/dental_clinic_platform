import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import { userLogin } from '../../http';



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(email, password, rememberMe)
            await userLogin(email, password, rememberMe);

            // Redirect to home
            navigate('/dashboard');

            } catch (error) {
                console.error('Login error', error.response ? error.response.data : error);
                if (error.response && error.response.data) {
                    setError(Object.values(error.response.data).flat());
                } else {
                    setError([error.message]);
                }
            }
        };

    return (
        <div className="login-card-container">
            <div className="login-card">
                <div className="login-card-body">
                    <form onSubmit={handleSubmit}>
                        <h5 className="fw-normal mb-3 pb-3">
                            Sign in
                        </h5>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="id_username">Email</label>
                            <input 
                                type="email" 
                                id="id_username" 
                                className="form-control-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="id_password">Password</label>
                            <input 
                                type="password" 
                                id="id_password" 
                                className="form-control-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="remember" 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            name="remember" 
                            />
                            <label className="form-check-label" htmlFor="remember">
                                Remember me
                            </label>
                        </div>
                        <p className="login-mb-5 pb-lg-2">
                            Don't have an account? <a href="/register/" className="link">Register here</a>
                        </p>
                        {error && <p className="text-danger">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
