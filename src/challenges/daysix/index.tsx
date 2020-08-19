/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DaySix() {
    return (
        <div id="page-day-six" className="container">
            <PageHeader
                title="Day 6 - Lightning text"
                link="challengesList"
            />
            <main>
                <div id="lightning-text">
                    <ul>
                        <li>H</li>
                        <li>E</li>
                        <li>L</li>
                        <li>L</li>
                        <li>O</li>
                        <li>W</li>
                        <li>O</li>
                        <li>R</li>
                        <li>L</li>
                        <li>D</li>
                    </ul>
                </div>
            </main>
        </div >
    );
}

export default DaySix;