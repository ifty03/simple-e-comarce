import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navbarStyle = {
    fontSize: "19px",
    height: "80px",
    width: "100%",
    display: "flex",
    color: "white",
    justifyContent: "space-between",
    padding: "0px 70px",
    alignItems: "center",
  };
  return (
    <div>
      <nav style={navbarStyle} className="bg-slate-900">
        <div>
          <img style={{ color: "white" }} src="logo.svg" alt="" />
        </div>
        <div>
          <Link className="ml-6 hover:text-orange-600" to="home">
            Home
          </Link>
          <Link className="ml-6 hover:text-orange-600" to="products">
            Products
          </Link>
          <Link className="ml-6 hover:text-orange-600" to="summary">
            OrderSummary
          </Link>
          <Link className="ml-6 hover:text-orange-600" to="about">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
