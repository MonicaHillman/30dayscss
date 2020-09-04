/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";
import catImage from "../../assets/images/desafio/gato4.png";
import cardImage from "../../assets/images/desafio/card.png";

function DayEighteen() {
  return (
    <div id="page-day-eighteen" className="container">
      <PageHeader title="Day 18 - Flip Card" link="challengesList" />
      <main>
        <div className="scene">
          <label className="card-wrap">
            <div className="card">
              <div className="front card-face">
                <img src={catImage} alt="" className="card-photo" />
              </div>
              <div className="back card-face">
                <img src={cardImage} alt="" className="card-photo" />
              </div>
            </div>
          </label>
        </div>
      </main>
    </div>
  );
}

export default DayEighteen;
