/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayOne() {
    return (
        <div id="page-day-one" className="container">
            <PageHeader
                title="Day 1 - Social Media Icons"
                link="challengesList"
            />
            <main>
<div id="social-media">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/monica.mazzochihillman" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa fa-facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/monispng" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCaP5LIDq8HNvugOjny1FJCQ?view_as=subscriber" target="_blank" >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa fa-youtube"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/monicamhillman/" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/monis.png/" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa fa-instagram"></span>
                            </a>
                        </li>
                    </ul>
                    </div>
            </main>
        </div>
    );
}

export default DayOne;