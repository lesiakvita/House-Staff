import React, { useState } from "react";

const reviewsData = [
  {
    name: "John Doe",
    review: "Great furniture! High quality and very comfortable.",
    date: "August 21, 2024",
  },
  {
    name: "Emily Smith",
    review: "Beautiful designs and excellent service. I love my new sofa!",
    date: "September 5, 2024",
  },
  {
    name: "Michael Brown",
    review: "Fast delivery and great craftsmanship. Highly recommend!",
    date: "September 15, 2024",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, review, date } = reviewsData[currentIndex];

  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="review-card">
        <p className="review-text">"{review}"</p>
        <p className="review-author">- {name}</p>
        <p className="review-date">{date}</p>
      </div>
      <div className="review-buttons">
        <button onClick={prevReview}>Previous</button>
        <button onClick={nextReview}>Next</button>
      </div>

      {/* Новый раздел с информацией о связи с клиентами */}
      <div className="feedback-info">
        <h3>We Value Your Feedback!</h3>
        <p>
          At our furniture store, we believe that our customers are the heart of
          everything we do. Your feedback helps us continuously improve our
          products and services. We are always excited to hear from you, whether
          it’s a review, a suggestion, or a question. We strive to provide the
          best customer experience, and your opinions truly matter to us.
        </p>
        <p>
          Feel free to reach out to us anytime! Our team is always ready to
          assist you with any inquiries or to simply hear how much you’re
          enjoying your new furniture. We are committed to providing not only
          high-quality products but also exceptional customer service.
        </p>
        <p>
          Thank you for being a part of our community. We’re always here to
          listen and ensure your satisfaction. If you haven’t left a review yet,
          we encourage you to do so. Your opinion could help other customers
          make informed decisions!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
