import React, { useState } from 'react';
import '../May/Add.css';
import { useNavigate } from 'react-router-dom'; 


const AddAgence 
= () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        NomAgence: "",
        zone_id: "",
        Id_charge_client: "",
        Id_responsable: "",
        Id_directeur_groupe: "",
        Id_directeur_region: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:8000/agences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setFormData({
                Agence: "",
                Societe: "",
                Type: ""
            });
            navigate('/Formulaire');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form first">
                    <div className="details personal">
                        <span className="title"> Ajouter agence </span>

                        <div className="fields">
                            <div className="input-field">
                                <label> nom Agence</label>
                                <input
                                    type="text"
                                    name="NomAgence"
                                    placeholder="NomAgence"
                                    value={formData.Agence}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Prive/public </label>
                                <input
                                    type="text"
                                    name="Societe"
                                    placeholder="Prive/public"
                                    value={formData.Societe}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Type </label>
                                <input
                                    type="text"
                                    name="Type"
                                    placeholder="Type"
                                    value={formData.Type}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    
                    
                   <div className="buttons">
                        <button type="submit" className="nextBtn">
                            <span className="btnText">Submit</span>
                            <i className="uil uil-navigator"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAgence;
