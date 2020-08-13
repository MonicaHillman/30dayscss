import React from 'react';

import './styles.css';
import PageHeader from '../../components/Header';
import dayOneImg from '../../assets/images/dayone.png';
import { Link } from 'react-router-dom';


function ChallengesList() {
    return (
        <div id="page-challenge-list" className="container">
            <PageHeader
                title="Click in the image"
                link=""
            />
            <main>
                <p>Day 1 - Social Media Icons</p>
                <div className="img-container">
                <Link to="/dayone">
                    <img src={dayOneImg} alt="Day One" />
                </Link>
                </div>
                <p>Day 2 - Animated Loader</p>
                <p>Day 3 - Change Color</p>
                <p>Day 4 - Button Effect</p>
            </main>
        </div>
    );
}

export default ChallengesList;