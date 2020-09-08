/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";
import landingImg from "../../assets/images/landing.svg";

function DayTwentyTwo() {
  return (
    <div id="page-day-twentytwo" className="container">
      <PageHeader title="Day 22 - Card Hover" link="challengesList" />
      <main>
        <div className="scene">
        <div className="cards">
          <div className="face face1">
            <div className="content">
              <img src={landingImg} alt=""></img>
            <h3>30 Dias CSS</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>30 dias de CSS3 é um desafio que visa ajudá-lo a melhorar suas habilidades de codificação fazendo mini projetos diarios utilizando CSS3.</p>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default DayTwentyTwo;
