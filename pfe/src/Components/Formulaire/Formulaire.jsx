import React, { useState } from 'react';
import './Add.css';
import { useNavigate } from 'react-router-dom'; 


const Formulaire = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Agence: "",
        Societe: "",
        Type: "",
        Activite: "",
        Forme_jur: "",
        Capital: "",
        Groupe_dappartenance: "",
        Adresse: "",
        Tel: "",
        Dirigeant: "",
        Vav: "",
        Statut: "",
        Etat: "",
        Client_conventionee_Biat: true,
        Conventionne_autre_banque: true,
        id_zone: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:8000/formulaire', {
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
                Type: "",
                Activite: "",
                Forme_jur: "",
                Capital: "",
                Groupe_dappartenance: "",
                Adresse: "",
                Tel: "",
                Dirigeant: "",
                Vav: "",
                Statut: "",
                Etat: "",
                Client_conventionee_Biat: true,
                Conventionne_autre_banque: true,
                id_zone: ""
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
                        <span className="title"> Projet de convention salarié </span>

                        <div className="fields">
                            <div className="input-field">
                                <label> Agence</label>
                                <input
                                    type="text"
                                    name="Agence"
                                    placeholder="Agence"
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

                            {/* Add more input fields for the first section */}
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

                            <div className="input-field">
                                <label> Activité </label>
                                <input
                                    type="text"
                                    name="Activite"
                                    placeholder="Activité"
                                    value={formData.Activite}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Forme Jur </label>
                                <input
                                    type="text"
                                    name="Forme_jur"
                                    placeholder="Forme Jur"
                                    value={formData.Forme_jur}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Capital </label>
                                <input
                                    type="text"
                                    name="Capital"
                                    placeholder="Capital"
                                    value={formData.Capital}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Groupe d'Appartenance </label>
                                <input
                                    type="text"
                                    name="Groupe_dappartenance"
                                    placeholder="Groupe d'Appartenance"
                                    value={formData.Groupe_dappartenance}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Second Section */}
                    <div className="details ID">
                        <span className="title"> Identity Details </span>

                        <div className="fields">
                            <div className="input-field">
                                <label> Adresse </label>
                                <input
                                    type="text"
                                    name="Adresse"
                                    placeholder="Adresse"
                                    value={formData.Adresse}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Tel </label>
                                <input
                                    type="text"
                                    name="Tel"
                                    placeholder="Tel"
                                    value={formData.Tel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Dirigeant </label>
                                <input
                                    type="text"
                                    name="Dirigeant"
                                    placeholder="Dirigeant"
                                    value={formData.Dirigeant}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Vav </label>
                                <input
                                    type="text"
                                    name="Vav"
                                    placeholder="Vav"
                                    value={formData.Vav}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Statut </label>
                                <input
                                    type="text"
                                    name="Statut"
                                    placeholder="Statut"
                                    value={formData.Statut}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Etat </label>
                                <input
                                    type="text"
                                    name="Etat"
                                    placeholder="Etat"
                                    value={formData.Etat}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Third Section */}
                    <div className="Donnéé Biat">
                        <span className="title"> Donnéé Biat </span>

                        <div className="fields">
                            <div className="input-field">
                                <label> Pôle </label>
                                <input
                                    type="text"
                                    name="Pole"
                                    placeholder="Pôle"
                                    value={formData.Pole}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Client / Prospect </label>
                                <input
                                    type="text"
                                    name="Client_Prospect"
                                    placeholder="Client / Prospect"
                                    value={formData.Client_Prospect}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> Compte </label>
                                <input
                                    type="text"
                                    name="Compte"
                                    placeholder="Compte"
                                    value={formData.Compte}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> MMM(N) </label>
                                <input
                                    type="text"
                                    name="MMM_N"
                                    placeholder="MMM(N)"
                                    value={formData.MMM_N}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label> MMM(N-1) </label>
                                <input
                                    type="text"
                                    name="MMM_N1"
                                    placeholder="MMM(N-1)"
                                    value={formData.MMM_N1}
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

export default Formulaire;
