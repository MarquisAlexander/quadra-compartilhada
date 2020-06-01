import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logoPrincipal.svg';

import './styles.css'

export default function Register() {

    const [name, setName]= useState('');

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="quadra compartilhada" />

                    <h1> Cadastro </h1>
                    <p>Faça seu cadastro e marque futebol da semana</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#207A2B" />
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={{}}>
                    <input
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}