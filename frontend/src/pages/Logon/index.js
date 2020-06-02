import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api.js';

import './styles.css';

import logoImg from '../../assets/logoPrincipal.svg'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("sessions", { id });

            localStorage.setItem('user_id', id);
            localStorage.setItem('userName', response.data.name);

            history.push('/register');
        } catch (err) {
            alert('Falha no login, tente novamente!')
        }
    }

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Quadra Compartilhada' />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                    maxLength='8'
                    placeholder="Sua Id"
                    value={id}
                    onChange={e =>setId(e.target.value)}
                    />

                    <button className='button' type='submit'>Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#207A2B" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}