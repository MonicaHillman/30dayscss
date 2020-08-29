/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayFourteen() {
  return (
    <div id="page-day-thirteen" className="container">
      <PageHeader title="Day 14 - Fake Terminal" link="challengesList" />
      <main>
        <div className="terminal">
          <div className="menu">
          <i></i><i></i><i></i>
          </div>
          <div className="display">
          <p>Hello World!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DayFourteen;
