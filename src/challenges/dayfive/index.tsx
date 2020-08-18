/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayFive() {
    return (
        <div id="page-day-five" className="container">
            <PageHeader
                title="Day 5 - Pulse Effect"
                link="challengesList"
            />
                <main>
                    <div className="pulse-page">
                        <div className="pulse-effect">
                        <a href="https://www.linkedin.com/in/monicamhillman/" target="_blank">
                            <span className="fa fa-linkedin"></span>
                        </a>
                        </div>
                    </div>
                </main>
            </div>
    );
}

export default DayFive;