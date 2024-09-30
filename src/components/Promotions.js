import React from "react";
import furnitureImg from "../img/sale.jpg";
import lampImg from "../img/free.jpeg";
import deliveryImg from "../img/delivery.jpg";
const promotions = [
  {
    title: "50% Off on All Furniture",
    description:
      "Get a massive 50% discount on all furniture items for a limited time. Don't miss out on the best deals of the season!",
    imgUrl: furnitureImg,
  },
  {
    title: "Buy 1 Get 1 Free on Lamps",
    description:
      "Brighten up your home with our exclusive offer. Buy one lamp and get the second one free.",
    imgUrl: lampImg,
  },
  {
    title: "Free Delivery for Orders Over $200",
    description:
      "Place an order above $200 and enjoy free delivery to your doorstep, hassle-free.",
    imgUrl: deliveryImg,
  },
];

const PromotionsSection = () => {
  return (
    <div className="promotions-section">
      <h2>Our Latest Promotions</h2>
      <div className="promotions-container">
        {promotions.map((promo, index) => (
          <div className="promotion-card" key={index}>
            <img src={promo.imgUrl} alt={promo.title} />
            <div className="promo-content">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <button className="promo-button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsSection;
