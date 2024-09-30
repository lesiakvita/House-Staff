import React from "react";
import { FaRegLightbulb, FaUsers, FaTags, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h1>About Us</h1>
      <p>
        At Hose Staff, we believe that furniture is more than just a necessity;
        it’s a way to express your personality, create memories, and shape your
        surroundings. Our mission is to offer a unique collection of bold,
        modern, and artfully crafted furniture that inspires your living space.
        We strive to merge functionality with creativity, ensuring that every
        piece not only enhances the aesthetic of your home but also serves as a
        lasting statement of style. Whether you’re redesigning a room or
        building a new space from scratch, our furniture is designed to be the
        perfect companion on your journey to create a home filled with character
        and warmth.
      </p>

      <div className="about-us-highlights">
        <div className="highlight">
          <FaRegLightbulb size={40} />
          <h3>Exclusive Design</h3>
          <p>
            We fuse imagination, creativity, and professional craftsmanship to
            deliver designs that are one-of-a-kind. Each piece we create tells
            its own story.
          </p>
        </div>

        <div className="highlight">
          <FaUsers size={40} />
          <h3>Professional Team</h3>
          <p>
            Our dedicated and passionate team brings together diverse skills and
            talents to constantly innovate and improve. We take pride in working
            together to create exceptional products.
          </p>
        </div>

        <div className="highlight">
          <FaTags size={40} />
          <h3>Affordable Prices</h3>
          <p>
            We believe that quality shouldn’t come at a high price. Our aim is
            to make our beautifully crafted furniture accessible to everyone,
            without compromising on style or durability.
          </p>
        </div>

        <div className="highlight">
          <FaGlobe size={40} />
          <h3>Global Reach</h3>
          <p>
            With clients across the globe, we are proud to be recognized as a
            leading name in modern furniture. We ship internationally and
            maintain sustainable practices in all aspects of our production.
          </p>
        </div>
      </div>

      <div className="about-us-values-mission-container">
        <div className="about-us-text">
          <div className="about-us-values">
            <h2>Our Values</h2>
            <p>
              At Furnicom, we are driven by innovation, sustainability, and
              customer satisfaction. We take our responsibility to the
              environment seriously, using eco-friendly materials and methods to
              create furniture that is stylish, comfortable, and
              earth-conscious. Each piece we design reflects our commitment to
              both aesthetics and functionality, ensuring that our customers not
              only enjoy beautiful spaces but also contribute to a greener
              future.
            </p>
          </div>

          <div className="about-us-mission">
            <h2>Our Mission</h2>
            <p>
              To transform spaces into beautiful living environments through
              cutting-edge designs and unparalleled craftsmanship, while
              ensuring every customer enjoys a personalized and fulfilling
              experience. We believe that every home should reflect the
              individuality of its owner, which is why we focus on creating
              unique, tailor-made solutions. Our team of designers and artisans
              work closely with each client to bring their vision to life,
              ensuring that every detail is crafted with care and precision.
            </p>
          </div>
        </div>

        <div className="about-us-image">
          <img src={require("../img/about.jpg")} alt="Our Values and Mission" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
