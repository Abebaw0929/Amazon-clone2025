import React, { useEffect, useState } from "react";
import ProdcutCard from "./ProductCard";
import axios from "axios";
import classes from "./Product.module.css";
function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={classes.product_contianer}>
      {products?.map((single_product, i) => {
        return <ProdcutCard key={i} data={single_product} />;
      })}
    </div>
  );
}

export default Product;
