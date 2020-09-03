/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles.css";
import PageHeader from "../../components/Header";

function DaySeventeen() {
  return (
    <div id="page-day-seventeen" className="container">
      <PageHeader title="Day 16 - Star Rating" link="challengesList" />
      <main>
        <p className="titulo">Avalie nosso aplicativo!</p>
        <br></br>
        <div className="cont">
          <a className="fa fa-star a1"></a>
          <a className="fa fa-star a2"></a>
          <a className="fa fa-star a3"></a>
          <a className="fa fa-star a4"></a>
          <a className="fa fa-star a5"></a>
        </div>
      </main>
    </div>
  );
}

export default DaySeventeen;
