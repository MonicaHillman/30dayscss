/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayOne() {
    return (
        <div id="page-day-two" className="container">
            <PageHeader
                title="Day 2 - Animated Loader"
                link="challengesList"
            />
            <body>
                <div className="loader-block">
                    <div className="loading">
                        LOADING
                        </div>
                    <div className="loader">
                    </div>
                </div>
            </body>
        </div>
    );
}

export default DayOne;