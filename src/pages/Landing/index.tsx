import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../../assets/images/landing.svg';
import personIcon from '../../assets/images/icons/person.svg';
import monitorIcon from '../../assets/images/icons/monitor.svg';
import './styles.css';

function Landing() {

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h2>Desafio #30diascss</h2>
                    <p>Projeto para armazenar os desafios realizados em um só local.</p>
                </div>

                <img
                    src={landingImg}
                    alt="30 dias CSS"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/challengesList" className="monitor">
                        <img src={monitorIcon} alt="Desafios" />
                        Desafios
                    </Link>
                    <Link to="/credits" className="person">
                        <img src={personIcon} alt="Creditos" />
                        Créditos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;