import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const center = {
    lat: 50.4501,
    lng: 30.5234,
  };

  const mapStyles = [
    {
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
  ];

  return (
    <div className="contact-section">
      <div className="info">
        <div className="content">
          <h2>How to Find Us</h2>
          <p>
            We are always happy to see you in our store! You can visit us at the
            following address:
          </p>
          <h3>
            <strong>Address:</strong> Example Street, 123, Kyiv, Ukraine
          </h3>

          <h3>Contact Us</h3>
          <p>
            If you have any questions, you can reach us through the following
            contacts:
          </p>
          <p>
            <strong>Email:</strong> info@housestaff.com
          </p>
          <p>
            <strong>Phone:</strong> 123 456 7890
          </p>

          <h3>Working Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>
        <div>
          <img
            src={require("../img/contacts.jpg")}
            alt="Our Values and Mission"
          />
        </div>
      </div>

      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Username</label>
          <div className="input-icon">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="yourmail@mail.com"
              required
            />
          </div>
        </div>

        <div className="input-field">
          <label>Email</label>
          <div className="input-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@mail.com"
              required
            />
          </div>
        </div>

        <div className="input-field">
          <label>Phone</label>
          <div className="input-icon">
            <i className="fas fa-phone"></i>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+123456789"
            />
          </div>
        </div>

        <div className="input-field">
          <label>Message</label>
          <div className="input-icon">
            <i className="fas fa-comment"></i>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-button">
          SEND <i className="fas fa-arrow-right"></i>
        </button>
      </form>

      <LoadScript googleMapsApiKey="AIzaSyAntOxG1-1EfwOoN0fItvb5xXifTtz1Lpc">
        <GoogleMap
          mapContainerStyle={{
            height: "500px",
            width: "100%",
          }}
          zoom={15}
          center={center}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ContactSection;
