import React, { useState, useEffect } from 'react';
import '../May/May.css'; 
import '../DashBoard/style.css'


const Listagences = () => {
    const [agenceData, setagenceData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreateagencePopup, setShowCreateagencePopup] = useState(false);

    useEffect(() => {
        const fetchagenceData = async () => {
            try {
                const response = await fetch('http://localhost:8000/agences', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch agences');
                }
                const data = await response.json();
                setagenceData(data);
            } catch (error) {
                console.error('Error fetching agences:', error);
            }
        };

        fetchagenceData();
    }, [token]); // Token is added as a dependency

    const handleDelete = (agenceId) => {
        // Implement your delete logic here
        console.log('Deleting agence with ID:', agenceId);
    };

    const toggleCreateagencePopup = () => {
        setShowCreateagencePopup(!showCreateagencePopup);
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
                                        <th>Taux </th>
                                        <th>Duree </th>
                                        <th>Famille </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {agenceData.map(agence => (
                                        <tr key={agence.id}>
                                            <td>{agence.nom}</td>
                                            <td>{agence.taux}</td>
                                            <td>{agence.duree}</td>
                                            <td>{agence.id_famille}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(agence.id)}>Delete</button>
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

export default Listagences;