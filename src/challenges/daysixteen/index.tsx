/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

import catImage from "../../assets/images/desafio/gato1.png";
import catImage2 from "../../assets/images/desafio/gato2.png";
import catImage3 from "../../assets/images/desafio/gato3.png";

function DaySixteen() {
  return (
    <div id="page-day-sixteen" className="container">
      <PageHeader title="Day 16 - Grayscale" link="challengesList" />
      <main>
        <div className="scene">
          <div className="image">
            <img src={catImage} alt="gato" />
          </div>
          <div className="image">
            <img src={catImage2} alt="gato" />
          </div>
          <div className="image">
            <img src={catImage3} alt="gato" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DaySixteen;
