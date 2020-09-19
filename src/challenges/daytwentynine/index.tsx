/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function Daythirty() {
  return (
    <div id="page-day-thirty" className="container">
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

export default Daythirty;
