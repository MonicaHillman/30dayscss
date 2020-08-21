/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';
import dogoneImg from '../../assets/images/icons/dogone.png';
import dogtwoImg from '../../assets/images/icons/dogtwo.png';
import dogthreeImg from '../../assets/images/icons/dogthree.png';
import dogfourImg from '../../assets/images/icons/dogfour.png';

function DayEight() {
    return (
        <div id="page-day-eight" className="container">
            <PageHeader
                title="Day 7 - Photo Cards"
                link="challengesList"
            />
            <main>
                <div id="cards">
                    <ul>
                        <li>
                                <span><img src={dogoneImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                        <li>
                                <span><img src={dogtwoImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                        <li>
                                <span><img src={dogoneImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                    </ul>
                </div>
                <div id="altcards">
                    <ul>
                        <li>
                                <span><img src={dogthreeImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                        <li>
                                <span><img src={dogfourImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                        <li>
                                <span><img src={dogfourImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                    </ul>
                </div>
                <div id="othercards">
                    <ul>
                        <li>
                                <span><img src={dogtwoImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                        <li>
                                <span><img src={dogthreeImg} alt="dog" /></span>
                                <span>?</span>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default DayEight;