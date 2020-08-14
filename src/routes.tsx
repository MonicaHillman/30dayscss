import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ChallengesList from './pages/ChallengesList';
import Credits from './pages/Credits';
import DayOne from './challenges/dayone';
import DayTwo from './challenges/daytwo';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/challengesList" component={ChallengesList} />
            <Route path="/credits" component={Credits} /> 
            <Route path="/dayone" component={DayOne} /> 
            <Route path="/daytwo" component={DayTwo} /> 
        </BrowserRouter>
    )
}

export default Routes;