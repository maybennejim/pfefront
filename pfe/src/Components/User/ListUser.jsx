import React, { useState, useEffect } from 'react';
import '../May/May.css'; // Import CSS file for styling
import CreateUserForm from './CreateUser';

const ListUsers = () => {
    const [userData, setUserData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreateUserPopup, setShowCreateUserPopup] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8000/users', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUserData();
    }, [token]); 

    const handleDelete = (userId) => {
        console.log('Deleting user with ID:', userId);
    };

    const toggleCreateUserPopup = () => {
        setShowCreateUserPopup(!showCreateUserPopup);
    };

   return (
    <>
        <div className="card--container2">
                        <section class="table__header">
                            <h1> Liste des Utilisateurs </h1>
                        </section>
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Date de creation</th>
                                        <th>Statut</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.create_at}</td>
                                            <td>{user.status}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
</div>
</>
    );
}

export default ListUsers;