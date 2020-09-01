import React from "react";

import "./styles.css";
import PageHeader from "../../components/Header";
import dayOneImg from "../../assets/images/dayone.png";
import dayTwoImg from "../../assets/images/daytwo.png";
import dayThreeImg from "../../assets/images/daythree.png";
import dayFourImg from "../../assets/images/dayfour.png";
import dayFiveImg from "../../assets/images/dayfive.png";
import daySixImg from "../../assets/images/daysix.png";
import daySevenImg from "../../assets/images/dayseven.png";
import dayEightImg from "../../assets/images/dayeight.png";
import dayNineImg from "../../assets/images/daynine.png";
import dayTenImg from "../../assets/images/dayten.png";
import dayElevenImg from "../../assets/images/dayeleven.png";
import dayTwelveImg from "../../assets/images/daytwelve.png";
import dayThirteenImg from "../../assets/images/daythirteen.png";
import dayFourteenImg from "../../assets/images/dayfourteen.png";
import dayFifteenImg from "../../assets/images/dayfifteen.png";
import daySixteenImg from "../../assets/images/daysixteen.png";

import { Link } from "react-router-dom";

function ChallengesList() {
  return (
    <div id="page-challenge-list" className="container">
      <PageHeader title="Click in the image" link="" />
      <main>
        <p>Day 1 - Social Media Icons</p>
        <Link to="/dayone">
          <img src={dayOneImg} alt="Day One" />
        </Link>
        <p>Day 2 - Animated Loader</p>
        <Link to="/daytwo">
          <img src={dayTwoImg} alt="Day Two" />
        </Link>
        <p>Day 3 - Change Color</p>
        <Link to="/daythree">
          <img src={dayThreeImg} alt="Day Three" />
        </Link>
        <p>Day 4 - Animated Button</p>
        <Link to="/dayfour">
          <img src={dayFourImg} alt="Day Four" />
        </Link>
        <p>Day 5 - Pulse Effect</p>
        <Link to="/dayfive">
          <img src={dayFiveImg} alt="Day Five" />
        </Link>
        <p>Day 6 - Lightning Text</p>
        <Link to="/daysix">
          <img src={daySixImg} alt="Day Six" />
        </Link>
        <p>Day 7 - Preloader</p>
        <Link to="/dayseven">
          <img src={daySevenImg} alt="Day Seven" />
        </Link>
        <p>Day 8 - Photo Cards</p>
        <Link to="/dayeight">
          <img src={dayEightImg} alt="Day Eight" />
        </Link>
        <p>Day 9 - Chat Bubbles</p>
        <Link to="/daynine">
          <img src={dayNineImg} alt="Day Nine" />
        </Link>
        <p>Day 10 - Glitch Effect</p>
        <Link to="/dayten">
          <img src={dayTenImg} alt="Day Ten" />
        </Link>
        <p>Day 11 - Animated Text</p>
        <Link to="/dayeleven">
          <img src={dayElevenImg} alt="Day Eleven" />
        </Link>
        <p>Day 12 - Social Medias</p>
        <Link to="/daytwelve">
          <img src={dayTwelveImg} alt="Day Twelve" />
        </Link>
        <p>Day 13 - Invisible Text</p>
        <Link to="/daythirteen">
          <img src={dayThirteenImg} alt="Day Thirteen" />
        </Link>
        <p>Day 14 - Fake Terminal</p>
        <Link to="/dayfourteen">
          <img src={dayFourteenImg} alt="Day Fourteen" />
        </Link>
        <p>Day 15 - Rocket</p>
        <Link to="/dayfifteen">
          <img src={dayFifteenImg} alt="Day Fourteen" />
        </Link>
        <p>Day 16 - Grayscale</p>
        <Link to="/daysixteen">
          <img src={daySixteenImg} alt="Day Sixteen" />
        </Link>
      </main>
    </div>
  );
}

export default ChallengesList;
