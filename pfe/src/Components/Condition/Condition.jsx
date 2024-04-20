import React, { useState, useEffect } from 'react';
import '../May/May.css'; // Import CSS file for styling


const Listconditions = () => {
    const [conditionData, setconditionData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreateconditionPopup, setShowCreateconditionPopup] = useState(false);

    useEffect(() => {
        const fetchconditionData = async () => {
            try {
                const response = await fetch('http://localhost:8000/conditions', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch conditions');
                }
                const data = await response.json();
                setconditionData(data);
            } catch (error) {
                console.error('Error fetching conditions:', error);
            }
        };

        fetchconditionData();
    }, [token]); // Token is added as a dependency

    const handleDelete = (conditionId) => {
        // Implement your delete logic here
        console.log('Deleting condition with ID:', conditionId);
    };

    const toggleCreateconditionPopup = () => {
        setShowCreateconditionPopup(!showCreateconditionPopup);
    };

   return (
    <>
        <div className="card--container2">
                        <section class="table__header">
                            <h1> Liste des conditions </h1>
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
                                    {conditionData.map(condition => (
                                        <tr key={condition.id}>
                                            <td>{condition.nom}</td>
                                            <td>{condition.taux}</td>
                                            <td>{condition.duree}</td>
                                            <td>{condition.id_famille}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(condition.id)}>Delete</button>
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

export default Listconditions;