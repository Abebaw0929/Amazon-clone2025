import React from "react";
import classes from "./Catagory.module.css";
import { Link } from "react-router-dom";
function CatagoryCard({ data }) {
  console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.category}`}>
        <span>{data.title}</span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
