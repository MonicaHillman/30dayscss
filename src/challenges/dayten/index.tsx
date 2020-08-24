/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayTen() {
    return (
        <div id="page-day-ten" className="container">
            <PageHeader
                title="Day 10 - Glitch Effect"
                link="challengesList"
            />
            <main>
            <div className="glitch">
                <h1>ERRO</h1>
                <h1>ERRO</h1>
                <h1>ERRO</h1>
                </div> 
            </main>
        </div>
    );
}

export default DayTen;