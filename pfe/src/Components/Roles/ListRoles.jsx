import React, { useState, useEffect } from 'react';

const ListRoles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/listRole')
            .then(response => response.json())
            .then(data => setRoles(data))
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    return (    
    <body>
        <div className="tabular--wrapper">
            <h3 className="main--title">List des roles</h3>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Role Name</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role, index) => (
                            <tr key={index}>
                                <td>{role.RoleName}</td>
                                <td>
                                    <button className="edit-button" >Modify</button>
                                    <button className="delete-button" >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </body>
    );
}

export default ListRoles;
