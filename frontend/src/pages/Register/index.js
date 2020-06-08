import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api.js';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logoPrincipal.svg';

import './styles.css'

export default function Register() {

    const [ name, setName ]= useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
        };

        try {
            const response = await api.post('users', data)

            alert(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')
        } catch (err){
                alert('Erro no cadastro, tente novamente.');
        }
    } 

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

                <form onSubmit={handleRegister}>
                    <input
                    required
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input
                    required
                    type="email" placeholder="Seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input
                    required
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}