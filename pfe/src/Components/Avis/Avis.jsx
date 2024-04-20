import React, { useState, useEffect } from 'react';
import '../May/May.css'; // Import CSS file for styling


const Listaviss = () => {
    const [avisData, setavisData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreateavisPopup, setShowCreateavisPopup] = useState(false);

    useEffect(() => {
        const fetchavisData = async () => {
            try {
                const response = await fetch('http://localhost:8000/aviss', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch aviss');
                }
                const data = await response.json();
                setavisData(data);
            } catch (error) {
                console.error('Error fetching aviss:', error);
            }
        };

        fetchavisData();
    }, [token]); // Token is added as a dependency

    const handleDelete = (avisId) => {
        // Implement your delete logic here
        console.log('Deleting avis with ID:', avisId);
    };

    const toggleCreateavisPopup = () => {
        setShowCreateavisPopup(!showCreateavisPopup);
    };

   return (
    <>
        <div className="card--container2">
                        <section class="table__header">
                            <h1> Liste des avis </h1>
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
                                    {avisData.map(avis => (
                                        <tr key={avis.id}>
                                            <td>{avis.nom}</td>
                                            <td>{avis.taux}</td>
                                            <td>{avis.duree}</td>
                                            <td>{avis.id_famille}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(avis.id)}>Delete</button>
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

export default Listaviss;