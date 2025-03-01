import React from "react";
import { catagoryInfos } from "./CatagoryFullinfo";
import classes from "./Catagory.module.css";
import CatagoryCard from "./CatagoryCard";
function Catagory() {
  return (
    <section className={classes.category__container}>
      {catagoryInfos.map((singleproduct, i) => (
        <CatagoryCard key={i} data={singleproduct} />
      ))}
    </section>
  );
}

export default Catagory;
