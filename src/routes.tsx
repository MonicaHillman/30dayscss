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
import DayThirteen from './challenges/daythirteen';
import DayFourteen from './challenges/dayfourteen';
import DayFifteen from './challenges/dayfifteen';
import DaySixteen from './challenges/daysixteen';
import DaySeventeen from './challenges/dayseventeen';
import DayEighteen from './challenges/dayeighteen';
import DayNineteen from './challenges/daynineteen';
import DayTwenty from './challenges/daytwenty';
import DayTwentyOne from './challenges/daytwentyone';
import DayTwentyTwo from './challenges/daytwentytwo';
import DayTwentyThree from './challenges/daytwentythree';
import DayTwentyFour from './challenges/daytwentyfour';
import DayTwentyFive from './challenges/daytwentyfive';
import DayTwentySix from './challenges/daytwentysix';
import DayTwentySeven from './challenges/daytwentyseven';
import DayTwentyEight from './challenges/daytwentyeight';

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
            <Route path="/daythirteen" component={DayThirteen}/>
            <Route path="/dayfourteen" component={DayFourteen}/>
            <Route path="/dayfifteen" component={DayFifteen}/>
            <Route path="/daysixteen" component={DaySixteen}/>
            <Route path="/dayseventeen" component={DaySeventeen}/>
            <Route path="/dayeighteen" component={DayEighteen}/>
            <Route path="/daynineteen" component={DayNineteen}/>
            <Route path="/daytwenty" component={DayTwenty}/>
            <Route path="/daytwentyone" component={DayTwentyOne}/>    
            <Route path="/daytwentytwo" component={DayTwentyTwo}/>   
            <Route path="/daytwentythree" component={DayTwentyThree}/> 
            <Route path="/daytwentyfour" component={DayTwentyFour}/>
            <Route path="/daytwentyfive" component={DayTwentyFive}/>
            <Route path="/daytwentysix" component={DayTwentySix}/>
            <Route path="/daytwentyseven" component={DayTwentySeven}/>
            <Route path="/daytwentyeight" component={DayTwentyEight}/>
        </BrowserRouter>
    )
}

export default Routes;