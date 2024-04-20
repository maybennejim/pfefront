import React, { useState, useEffect } from 'react';
import '../May/May.css'; // Import CSS file for styling


const Listzones = () => {
    const [zoneData, setzoneData] = useState([]);
    const [token, setToken] = useState('');
    const [showCreatezonePopup, setShowCreatezonePopup] = useState(false);

    useEffect(() => {
        const fetchzoneData = async () => {
            try {
                const response = await fetch('http://localhost:8000/zones', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch zones');
                }
                const data = await response.json();
                setzoneData(data);
            } catch (error) {
                console.error('Error fetching zones:', error);
            }
        };

        fetchzoneData();
    }, [token]); // Token is added as a dependency

    const handleDelete = (zoneId) => {
        // Implement your delete logic here
        console.log('Deleting zone with ID:', zoneId);
    };

    const toggleCreatezonePopup = () => {
        setShowCreatezonePopup(!showCreatezonePopup);
    };

   return (
    <>
        <div className="card--container2">
                        <section class="table__header">
                            <h1> Liste des zones </h1>
                        </section>
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nom zone</th>
                                        <th>Prenom libelle</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {zoneData.map(zone => (
                                        <tr key={zone.id}>
                                            <td>{zone.Nom_Zone}</td>
                                            <td>{zone.Libelle}</td>
                                            <td>
                                                <button className="edit-button">Edit</button>
                                                <button className="delete-button" onClick={() => handleDelete(zone.id)}>Delete</button>
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

export default Listzones;