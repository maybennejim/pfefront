import React, { useState, useEffect } from 'react';
import '../May/May.css'; // Import CSS file for styling


const Listfamilles = () => {
    const [familleData, setfamilleData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreatefamillePopup, setShowCreatefamillePopup] = useState(false);

    useEffect(() => {
        const fetchfamilleData = async () => {
            try {
                const response = await fetch('http://localhost:8000/familles', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch familles');
                }
                const data = await response.json();
                setfamilleData(data);
            } catch (error) {
                console.error('Error fetching familles:', error);
            }
        };

        fetchfamilleData();
    }, [token]); // Token is added as a dependency

    const handleDelete = (familleId) => {
        // Implement your delete logic here
        console.log('Deleting famille with ID:', familleId);
    };

    const toggleCreatefamillePopup = () => {
        setShowCreatefamillePopup(!showCreatefamillePopup);
    };

   return (
    <>
        <div className="card--container2">
                        <section class="table__header">
                            <h1> Liste des Familles </h1>
                        </section>
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Taux </th>
                                        <th>Duree </th>
                                        <th>Famille </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {familleData.map(famille => (
                                        <tr key={famille.id}>
                                            <td>{famille.nom}</td>
                                            <td>{famille.taux}</td>
                                            <td>{famille.duree}</td>
                                            <td>{famille.id_famille}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(famille.id)}>Delete</button>
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

export default Listfamilles;