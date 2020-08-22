/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayNine() {
    return (
        <div id="page-day-nine" className="container">
            <PageHeader
                title="Day 9 - Chat Bubbles"
                link="challengesList"
            />
            <main>
                <p className="send">Hello world!</p>
                <p className="receive">Olá mundo!</p>
            </main>
        </div>
    );
}

export default DayNine;