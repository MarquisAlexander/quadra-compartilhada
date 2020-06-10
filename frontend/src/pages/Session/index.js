import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import api from '../../services/api';

// import logo from '../../assets/logoPrincipal.svg'
import './styles.css';

export default function Session() {

    const [quadras, setQuadras] = useState([]);

    // const history = useHistory();

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    console.log(userId)

    useEffect(() => {
        api.get('session', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setQuadras(response.data)
            
        })

    }, [userId])
    
    return (
        <>
        <div className="profile-container">
            <header>
                {/* <img src={logo} alt="Quadra Compartilhada" /> */}
                <span> Bem vindo(a), {userName}</span>
            </header>
            
            <ul>
                {quadras.map(quadra => (
                    <li key={quadra.id}>
                        <strong>Quadra</strong>
                        <p>{quadra.name_quadra}</p>

                        <strong>Dias Disponíveis</strong>
                        <p>{quadra.dias_disponiveis}</p>

                        <strong>Horários</strong>
                        <p>{quadra.horario}</p>

                        <strong>Modalidade</strong>
                        <p>{quadra.modelidade}</p>

                        <strong>Endereço</strong>
                        <p>{quadra.rua} {quadra.numero} {quadra.bairro}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}