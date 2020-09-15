/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DayTwentySix() {
  return (
    <div id="page-day-twentysix" className="container">
      <PageHeader title="Day 26 - Loading" link="challengesList" />
      <main>
        <div className="scene">
          <div className="loadingtext">
            <h1 data-text="Carregando">Carregando</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DayTwentySix;
