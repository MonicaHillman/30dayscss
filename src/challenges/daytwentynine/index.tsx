/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";
import catImage from "../../assets/images/desafio/gato4.png";

function DayTwentyNine() {
  return (
    <div id="page-day-twentynine" className="container">
      <PageHeader title="Day 29 - Card Hover" link="challengesList" />
      <main>
        <div className="scene">
          <div className="boxes">
            <div className="catcard"></div>
            <div className="catcard"></div>
            <div className="catcard"></div>
            <div className="catcard"></div>
            <div className="catcard"></div>
            <div className="catcard"></div>
            <div className="catcard"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DayTwentyNine;
