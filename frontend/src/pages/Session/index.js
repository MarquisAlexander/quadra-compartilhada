import React from 'react';

import api from '../../services/api';

import logo from '../../assets/logoPrincipal.svg'

export default function Session() {

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Quadra Compartilhada" />
                <span> Bem vindo(a), {userName}</span>
            </header>
        </div>
    )
}