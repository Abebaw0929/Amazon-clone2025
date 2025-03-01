import React, { useContext } from "react";
import classes from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";

// function ProductCard({ data, flex, renderDesc }) {
//   console.log(data);
//   const { image, title, id, rating, price, description } = data;
//   const [state, dispatch] = useContext(DataContext);
//   const addToCart = () => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: { image, title, id, rating, price, description },
//     });
//   };
//   return (
//     <div
//       className={`${classes.card_container} $
//       {
//         flex ? classes.product_flexed  ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
//         <div className={classes.rating}>
//           <Rating value={rating.rate} precision={0.1} />
//           <small>{rating.count}</small>
//         </div>
//         <div>
//           {/* <p>{price}</p> */}
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button} onClick={addToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }
function ProductCard({ data, flex, renderDesc, renderAdd }) {
  console.log(data);
  const { image, title, id, rating, price, description } = data;
  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    if (!image || !title || !id || !price) {
      console.error("Missing essential product details for add to cart.");
      return;
    }

    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          {/* <p>{price}</p> */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
