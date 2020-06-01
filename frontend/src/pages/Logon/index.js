import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logoPrincipal.svg'

export default function Logon() {
    const [id, setId] = useState('');

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Quadra Compartilhada' />

                <form onSubmit={{}}>
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