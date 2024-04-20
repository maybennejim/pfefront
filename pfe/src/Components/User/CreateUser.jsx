import React, { useState } from 'react';
import './CreateUser.css'; // Import CSS file for styling

const CreateUserForm = ({ onClose, onUserCreated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    first_name: firstName,
                    last_name: lastName
                })
            });

            if (response.ok) {
                setMessage('User created successfully.');
                setUsername('');
                setPassword('');
                setFirstName('');
                setLastName('');
            } else {
                const data = await response.json();
                setMessage(data.message || 'Failed to create user.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            setMessage('An error occurred while creating user.');
        }
    };

    return (
            <div className="card--wrapper">
                            <h3>Ajouter un utilisateur</h3>
                <div className="tabular--wrapper">
            <form onSubmit={handleSubmit} className="create-user-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <button type="submit" className="submit-button">Create User</button>
            </form>
            {message && <p className="message">{message}</p>}
            </div>
            </div>
    );
};

export default CreateUserForm;
