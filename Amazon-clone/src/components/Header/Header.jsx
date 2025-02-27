import React from "react";
import { SlLocationPin } from "react-icons/sl";

import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";

import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <a href="/" className="logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>

            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          {/* SEARCH  */}
          <select name="" id="">
            <option value="">All</option>
          </select>

          <input type="text" name="" id="" placeholder="Search Amazon" />

          <BsSearch size={38} />
        </div>
        <div className={classes.order__container}>
          <a href="/" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="/"
            />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          {/* Sign in */}
          <a href="/">
            <div>
              <p>Hello, Sign In</p>
              <option value=""> Account & Lists</option>
              {/* <span>Account & Lists</span> */}
            </div>
          </a>

          {/* Order */}
          <a href="/">
            <p>returns</p>
            <span>& Orders</span>
          </a>

          {/* Cart */}
          <a href="/" className={classes.cart}>
            <BiCart size={35} />
            {/* <span>{totalItem}</span> */}
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;
