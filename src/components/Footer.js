import React from "react";
import InstagramIcon from "../img/socials/inst.svg";
import FacebookIcon from "../img/socials/face.svg";
import TwitterIcon from "../img/socials/tw.svg";
import PinterestIcon from "../img/socials/pn.svg";

export default function FooterSection() {
  return (
    <footer className="footer-section" id="contacts">
      <div className="footer-section__container">
        <div className="footer-section__column">
          <h3>Contact Us</h3>
          <ul>
            <div className="footer-section__info">
              <li>Email: </li>
              <li className="footer-section__main">info@housestaff.com</li>
            </div>
            <div className="footer-section__info">
              <li>Phone: </li>
              <li className="footer-section__main">123 456 7890</li>
            </div>
            <div className="footer-section__info">
              <li>Address: </li>
              <li className="footer-section__main">
                Example Street, 123, Kyiv, Ukraine
              </li>
            </div>
          </ul>
        </div>
        <div className="footer-section__column footer-section__column--center">
          <p className="footer-section__desc">
            We provide a wide selection of high-quality pieces for every room,
            from cozy sofas to modern tables and chairs. We guarantee top-notch
            materials, attention to detail, and affordable prices. Create a cozy
            and unique interior with us!
          </p>
          <div className="footer__social-icons">
            <img src={InstagramIcon} alt="Instagram" />
            <img src={FacebookIcon} alt="Facebook" />
            <img src={TwitterIcon} alt="Twitter" />
            <img src={PinterestIcon} alt="Pinterest" />
          </div>
        </div>
        <div className="footer-section__column footer-section__column-last">
          <h3>Utility Pages</h3>
          <ul>
            <li className="footer-section__add">Style Guide</li>
            <li className="footer-section__add">404 Not Found</li>
            <li className="footer-section__add">Password Protected</li>
            <li className="footer-section__add">Licences</li>
            <li className="footer-section__add">Changelog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
