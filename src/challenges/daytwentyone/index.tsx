/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayTwentyOne() {
  return (
    <div id="page-day-twentyone" className="container">
      <PageHeader title="Day 21 - Social Media" link="challengesList" />
      <main>
        <div className="scene">
          <div className="box">
              <div className="icon">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <h4>LinkedIn</h4>
                  <h3>/in/monicamhillman</h3>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DayTwentyOne;
