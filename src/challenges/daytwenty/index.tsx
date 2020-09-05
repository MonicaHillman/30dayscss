import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";
import catImage from "../../assets/images/desafio/gato4.png";
import catImage2 from "../../assets/images/desafio/gato5.png";
import catImage3 from "../../assets/images/desafio/gato6.png";

function DayTwenty() {
  return (
    <div id="page-day-twenty" className="container">
      <PageHeader title="Day 20 - Isometric Cards" link="challengesList" />
      <main>
        <div className="bg">
        <ul>
          <li><img src={catImage} alt="cat"></img></li>
          <li><img src={catImage3} alt="cat"></img></li>
          <li><img src={catImage2} alt="cat"></img></li>
        </ul>
        </div>
      </main>
    </div>
  );
}

export default DayTwenty;
