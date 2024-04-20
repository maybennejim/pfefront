import React from 'react';
import './UserModal.css'; // Import CSS file for styling
import CreateUserForm from './CreateUser'; // Import CreateUserForm component

const UserModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <CreateUserForm onClose={onClose} />
            </div>
        </div>
    );
};

export default UserModal;
