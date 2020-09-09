/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";
import landingImg from "../../assets/images/landing.svg"

function DayTwentyThree() {
  return (
    <div id="page-day-twentythree" className="container">
      <PageHeader title="Day 23 - Card Hover" link="challengesList" />
      <main>
      <div className="scene">
        <div className="cardd">
          <div className="imgBx">
            <img src={landingImg} alt=""></img>
          </div>
          <div className="content">
            <h2>30 Dias de CSS</h2>
            <p>Desafio que visa ajudar suas habilidades de codificação fazendo mini projetos diarios.</p>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default DayTwentyThree;
