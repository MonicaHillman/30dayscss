/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayEleven() {
    return (
        <div id="page-day-eleven" className="container">
            <PageHeader
                title="Day 11 - Animated Text"
                link="challengesList"
            />
            <main>
            <div className="agro">
                <h1>Agro é <span></span></h1>
                </div> 
            </main>
        </div>
    );
}

export default DayEleven;