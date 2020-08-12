import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ChallengesList from './pages/ChallengesList';
import Credits from './pages/Credits';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            {/* <Route path="/challenges" component={ChallengesList} />
            <Route path="/credits" component={Credits} /> */}
        </BrowserRouter>
    )
}

export default Routes;