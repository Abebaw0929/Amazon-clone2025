import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Pages/Auth/SignUp";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Payment from "./Pages/Payment/Payment";
import Landing from "./Pages/Landing/Landing";
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
