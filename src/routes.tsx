import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ChallengesList from './pages/ChallengesList';
import Credits from './pages/Credits';
import DayOne from './challenges/dayone';
import DayTwo from './challenges/daytwo';
import DayThree from './challenges/daythree';
import DayFour from './challenges/dayfour';
import DayFive from './challenges/dayfive';
import DaySix from './challenges/daysix';
import DaySeven from './challenges/dayseven';
import DayEight from './challenges/dayeight';
import DayNine from './challenges/daynine';
import DayTen from './challenges/dayten';
import DayEleven from './challenges/dayeleven';
import DayTwelve from './challenges/daytwelve';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/challengesList" component={ChallengesList} />
            <Route path="/credits" component={Credits} /> 
            <Route path="/dayone" component={DayOne} /> 
            <Route path="/daytwo" component={DayTwo} /> 
            <Route path="/daythree" component={DayThree} /> 
            <Route path="/dayfour" component={DayFour} /> 
            <Route path="/dayfive" component={DayFive} />
            <Route path="/daysix" component={DaySix} />
            <Route path="/dayseven" component={DaySeven} />  
            <Route path="/dayeight" component={DayEight} />  
            <Route path="/daynine" component={DayNine}/>
            <Route path="/dayten" component={DayTen}/>
            <Route path="/dayeleven" component={DayEleven}/>
            <Route path="/daytwelve" component={DayTwelve}/>
        </BrowserRouter>
    )
}

export default Routes;