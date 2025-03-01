import React from "react";
import classes from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";

function ProductCard({ data }) {
  console.log(data);
  const { image, title, id, rating, price } = data;
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          {/* <p>{price}</p> */}
          <CurrencyFormat amount={price} />
        </div>
      </div>
      <button className={classes.button}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
