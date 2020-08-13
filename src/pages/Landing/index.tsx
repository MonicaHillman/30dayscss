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
                    <h2>Challenge #30dayscss</h2>
                    <p>Keep your projects in one local.</p>
                    <br/>
                    <p>Creator of the challenge: Milena Carecho</p>
                    <p>Developer: Monica Hillman</p>
                </div>

                <img
                    src={landingImg}
                    alt="30 dias CSS"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/challengesList" className="monitor">
                        <img src={monitorIcon} alt="Desafios" />
                        Challenges
                    </Link>
                    <Link to="/credits" className="person">
                        <img src={personIcon} alt="Creditos" />
                        Credits
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;