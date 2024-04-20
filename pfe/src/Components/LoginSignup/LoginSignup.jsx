import React, { useState } from "react";
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from "react-router-dom"; 

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate(); 

    const handleLogin = async () => {
        try {
          
            const response = await fetch('http://localhost:8000/auth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: username,
                    password: password
                })
            });
            if (response.status === 200) {
                const data = await response.json();
                setToken(data.access_token);
                navigate('/index'); 
            } else {
                const data = await response.json();
                setError(data.detail);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in.');
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            {error && <div className="error">{error}</div>}
            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Login</div>
            </div>
            {token && <div className="success">Token: {token}</div>}
        </div> 
    );
}

export default LoginSignup;
