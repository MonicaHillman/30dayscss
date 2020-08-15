import React from 'react';

import './styles.css';
import PageHeader from '../../components/Header';
import dayOneImg from '../../assets/images/dayone.png';
import dayTwoImg from '../../assets/images/daytwo.png';
import dayThreeImg from '../../assets/images/daythree.png';
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
                <div className="img-container-two">
                <Link to="/daytwo">
                    <img src={dayTwoImg} alt="Day Two" />
                </Link>
                </div>
                <p>Day 3 - Change Color</p>
                <div className="img-container-three">
                <Link to="/daythree">
                    <img src={dayThreeImg} alt="Day Three" />
                </Link>
                </div>
                <p>Day 4 - Button Effect</p>
            </main>
        </div>
    );
}

export default ChallengesList;