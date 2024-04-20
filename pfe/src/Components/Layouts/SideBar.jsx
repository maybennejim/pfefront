import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    
    return (
        <>
            <div className="sidebar">

                <div className="logo"></div>
                <ul className="menu">
                    <li className="active">
                        <Link to="/index">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/listUser">
                            <i className="fas fa-chart-bar"></i>
                            <span>Liste utilisateur</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ListRole">
                            <i className="fas fa-briefcase"></i>
                            <span>ListRole</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/Formulaire">
                            <i className="fas fa-star"></i>
                            <span>Formulaire</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <i className="fas fa-cog"></i>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBar;
