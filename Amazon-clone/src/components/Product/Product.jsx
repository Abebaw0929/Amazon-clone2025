import React, { useEffect, useState } from "react";
import ProdcutCard from "./ProductCard";
import axios from "axios";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_contianer}>
          {products?.map((single_product, i) => {
            return (
              <ProdcutCard renderAdd={true} key={i} data={single_product} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Product;
