/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayTwentyEight() {
  return (
    <div id="page-day-twentyeight" className="container">
      <PageHeader title="Day 28 - Glowing Gradient" link="challengesList" />
      <main>
        <div className="scene">
          <ul>
            <li><a href="https://github.com/MonicaHillman"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/in/monicamhillman/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/monispng"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/monis.png/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
        
        </div>
      </main>
    </div>
  );
}

export default DayTwentyEight;
