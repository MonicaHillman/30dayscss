/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayTwelve() {
  return (
    <div id="page-day-twelve" className="container">
      <PageHeader title="Day 12 - Social Medias" 
      link="challengesList" />
      <main>
        <div className="social-icons">
          <div className="social-btn flex-center" id="twitter">
              <p className="fa fa-twitter"></p>
            <span> @monispng</span>
          </div>

          <div className="social-btn flex-center" id="github">
          <p className="fa fa-github"></p>
            <span> monicahillman</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DayTwelve;
