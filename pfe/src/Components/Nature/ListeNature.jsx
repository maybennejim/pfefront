import React, { useState, useEffect } from 'react';
import '../May/May.css'; // Import CSS file for styling


const Listnatures = () => {
    const [natureData, setnatureData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreatenaturePopup, setShowCreatenaturePopup] = useState(false);

    useEffect(() => {
        const fetchnatureData = async () => {
            try {
                const response = await fetch('http://localhost:8000/natures', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch natures');
                }
                const data = await response.json();
                setnatureData(data);
            } catch (error) {
                console.error('Error fetching natures:', error);
            }
        };

        fetchnatureData();
    }, [token]); // Token is added as a dependency

    const handleDelete = (natureId) => {
        // Implement your delete logic here
        console.log('Deleting nature with ID:', natureId);
    };

    const toggleCreatenaturePopup = () => {
        setShowCreatenaturePopup(!showCreatenaturePopup);
    };

   return (
    <>
        <div className="card--container2">
                        <section class="table__header">
                            <h1> Liste des Natures </h1>
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
                                    {natureData.map(nature => (
                                        <tr key={nature.id}>
                                            <td>{nature.nom}</td>
                                            <td>{nature.taux}</td>
                                            <td>{nature.duree}</td>
                                            <td>{nature.id_famille}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(nature.id)}>Delete</button>
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

export default Listnatures;