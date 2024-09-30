import React, { useState, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order";
import { Link, useLocation } from "react-router-dom";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Sum: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>There are no products yet</h2>
    </div>
  );
};

const backgroundImages = [
  require("../img/room.jpg"),
  require("../img/room1.jpg"),
  require("../img/room2.jpg"),
  require("../img/room3.jpg"),
  require("../img/room4.jpg"),
  require("../img/room5.jpg"),
  require("../img/room6.jpg"),
  require("../img/room7.jpg"),
];

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      props.toggleMainPageVisibility(true);
    } else {
      props.toggleMainPageVisibility(false);
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setFade(true);
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="header-content">
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>

          <li>
            <Link to="/promotions">Promotions</Link>
          </li>
        </ul>
        <FaShoppingBasket
          onClick={() => setCartOpen((prev) => !prev)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="slideshow-container">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`background-image ${
              index === currentIndex && fade ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="overlay">
          <h1 className="slideshow-title">Welcome to Our Store</h1>
          <p className="slideshow-description">
            Discover our latest collection of furniture and home accessories.
          </p>
        </div>
      </div>
    </header>
  );
}
