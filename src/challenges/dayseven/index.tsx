/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DaySeven() {
    return (
        <div id="page-day-seven" className="container">
            <PageHeader
                title="Day 7 - Preloader"
                link="challengesList"
            />
            <main>
                <div id="preloader-animated">
                    <ul>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                    </ul>
                </div>
            </main>
        </div >
    );
}

export default DaySeven;