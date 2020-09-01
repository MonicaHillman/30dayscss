/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayFifteen() {
  return (
    <div id="page-day-fifteen" className="container">
      <PageHeader title="Day 15 - Rocket" link="challengesList" />
      <main>
        <div className="background">
        <i className="fa fa-rocket" aria-hidden="true"></i>
        <span className="rock1"><i className="fa fa-asterisk" aria-hidden="true"></i></span>
        <span className="rock2"><i className="fa fa-asterisk" aria-hidden="true"></i></span>
        </div>
      </main>
    </div>
  );
}

export default DayFifteen;
