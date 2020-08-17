/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayFour() {
    return (
        <div id="page-day-four" className="container">
            <PageHeader
                title="Day 4 - Animated Button"
                link="challengesList"
            />
            <main>
                <div id="button-page">
                <button className="button">
                    <span>Click me!</span>
                    Hello world!
                </button>
                </div>
            </main>
        </div>
    );
}

export default DayFour;