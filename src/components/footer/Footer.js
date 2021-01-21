import { Divider } from "@material-ui/core";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container_main}>
        <div className={Styles.about}>
          <img src="/assets/footer/logo.svg" alt="logo" />
          <p>
            We are a software development and digital marketing company existing
            to help businesses develop solutions to help them achieve their
            goals.
          </p>
          <div>
            <img src="/assets/footer/facebook.svg" alt="facebook" />
            <img src="/assets/footer/linkedIn.svg" alt="linkedIn" />
            <img src="/assets/footer/twitter.svg" alt="twitter" />
          </div>
        </div>
        <div className={Styles.quicklinks}>
          <p>Quick Links</p>
          <ul>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Technology</li>
            <li>Portfolio</li>
            <li>Project Request</li>
          </ul>
        </div>
        <div className={Styles.services}>
          <p>Services</p>
          <ul>
            <li>Digital Martketing</li>
            <li>Product Design</li>
            <li>Product Development</li>
            <li>Web Development</li>
            <li>Cloud Services</li>
          </ul>
        </div>
        <div className={Styles.mobile_mid}>
          <div className={Styles.mobile_quicklinks}>
            <p>Quick Links</p>
            <ul>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Technology</li>
              <li>Portfolio</li>
              <li>Project Request</li>
            </ul>
          </div>
          <div className={Styles.mobile_services}>
            <p>Services</p>
            <ul>
              <li>Digital Martketing</li>
              <li>Product Design</li>
              <li>Product Development</li>
              <li>Web Development</li>
              <li>Cloud Services</li>
            </ul>
          </div>
        </div>
        <div className={Styles.contact}>
          <p>Get In Touch</p>
          <ul>
            <li>Contact Us</li>
            <li>Get Hired</li>
          </ul>
        </div>
      </div>
      <Divider />
      <p className={Styles.copyright}>
        <span style={{ marginRight: "8px" }}>&#169;</span>
        Copyright 2020 nubitz. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
