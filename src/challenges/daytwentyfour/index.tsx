/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayTwentyFour() {
  return (
    <div id="page-day-twentyfour" className="container">
      <PageHeader title="Day 24 - Mail Animation" link="challengesList" />
      <main>
      <div className="scene">
        <div className="envelope">
          <div className="paper">
          </div>
          <div className="inner1">
            <div className="inner2"></div>
          </div>
          <div className="cover"></div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default DayTwentyFour;
