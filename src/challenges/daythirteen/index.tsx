/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayThirteen() {
  return (
    <div id="page-day-thirteen" className="container">
      <PageHeader 
      title="Day 13 - Invisible Text" 
      link="challengesList" />
      <main>
        <div className="message">
        <h1>Find me!</h1>
        <p>Have a good night!</p>
        </div>
      </main>
    </div>
  );
}

export default DayThirteen;
