/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayTwo() {
    return (
        <div id="page-day-two" className="container">
            <PageHeader
                title="Day 2 - Animated Loader"
                link="challengesList"
            />
            <main>
                <div className="loader-block">
                    <p>
                        LOADING
                        </p>
                    <div className="loader">
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DayTwo;