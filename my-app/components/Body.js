import React from "react";
import MarketCard from "./MarketCard";
import styles from "../styles/Home.module.css";
import Card from "./Card";


const Body = () => {
  return (
    <div className style={{paddingTop:"65px"}}>
      <section>
        <img src="/head.png" alt="poster" style={{ width: "100%" }} />
      </section>
      <section>
      </section>
      <section>
        <Card />
      </section>
      <section></section>
    </div>
  );
};

export default Body;
