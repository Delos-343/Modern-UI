import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
    <h1 className="gradient__text"><small> Contact Us for Opportunities </small></h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Contact Us</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Londres Nova, Mariner Valley, Mars<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4><strong>Connect with Me</strong></h4>
        <p>Codepen</p>
        <p>WhatsApp</p>
        <p>LinkedIn</p>
        <p>Instagram</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4><strong>Company Profile</strong></h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4><strong>Get in Touch</strong></h4>
        <p>Londres Nova, Mariner Valley, Mars</p>
        <p>+62 (877) 8876-3027</p>
        <p>mohammed.dwihandoko@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Delos. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;