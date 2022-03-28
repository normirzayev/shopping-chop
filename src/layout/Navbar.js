import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../style/navbar.css";
import Home  from "../components/Home";
import Clothes from "../components/Clothes";
import Shoes from "../components/Shoes";
import Accessories from "../components/Accessories";
import logo from "../img/home/logo.png";
import { faHeart, faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Navbar () {
  return (
    <div className="navbar">
      <Router>
        <nav>
          <div className="navlink">
            <NavLink to="/" ActiveClassName="active" >home</NavLink>
            <NavLink to="/clothes" >clothes</NavLink>
            <NavLink to="/shoes" >shoes</NavLink>
            <NavLink to="/accessories" >accessories</NavLink>
          </div>
          <div>
            <Link to="/"> <img src={logo} alt="logo" /> </Link>
          </div>
          <div className="profile">
            <div className="search">
              <label>
                <input type="search" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} />
              </label>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/clothes" element={< Clothes />} />
          <Route path="/shoes" element={< Shoes />} />
          <Route path="/accessories" element={< Accessories />} />
        </Routes>  
      </Router>
    </div>
  )
}