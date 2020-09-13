/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";
import gatoImg from "../../assets/images/desafio/gato7.png";

function DayTwentyFive() {
  return (
    <div id="page-day-twentyfive" className="container">
      <PageHeader title="Day 25 - Birthday Invitation" link="challengesList" />
      <main>
        <div className="scene">
          <div className="carta">
            <div className="imgBox">
              <img src={gatoImg} alt=""></img>
            </div>
            <div className="details">
              <br></br>
              <h2>Birthday Party!</h2>
              <br></br>
              <p>Join us to celebrate Cat's birthday!</p>
              <br></br>
              <p>On Sunday 10th September from 2:30pm - 4:30pm at McDonalds</p>
              <br></br>
              <p>Confirm your presence in my social medias.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DayTwentyFive;
