import Image from "next/image";
import Card from "../components/cards/Card";

import Button from "../components/primary-button/Button";
import SectionFive from "../sections/homepage-sections/section-five/SectionFive";
import SectionFour from "../sections/homepage-sections/section-four/SectionFour";
import SectionOne from "../sections/homepage-sections/section-one/SectionOne";
import SectionSeven from "../components/contact/Contact";
import SectionSix from "../sections/homepage-sections/section-six/SectionSix";
import SectionThree from "../sections/homepage-sections/section-three/SectionThree";
import SectionTwo from "../sections/homepage-sections/section-two/SectionTwo";
import Styles from "../styles/home.module.scss";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.background_video}>
        <video
          src={require("../../public/assets/home/header/hero-video.mp4")}
          muted
          loop
          autoPlay
        ></video>
        <div className={Styles.overlay}></div>
      </div>
      <div className={Styles.content}>
        <nav>
          <div className={Styles.logo_container}>
            <Image
              src="/assets/home/header/logo.svg"
              width="120"
              height="50"
              alt="nubitz-logo"
            />
          </div>
          <div className={Styles.nav_items}>
            <ul>
              <li>About us</li>
              <li>Project request</li>
              <li>Blog</li>
              <li>Get hired</li>
            </ul>
            <Button text="Get Started" primary />
          </div>
        </nav>
        <div className={Styles.hero_text}>
          <h1>We solve problems related to IT infrastructure</h1>
          <p>
            We are a software development and digital marketing company existing
            to help businesses develop solutions that help them achieve their
            own desired outcomes.
          </p>
          <Button text="Get Started" primary />
        </div>
        <div className={Styles.accomplishments}>
          <Card />
        </div>
      </div>
      <div className={Styles.companies}>
        <div>
          <img src="/assets/home/accomplishments/medtox.svg" alt="Medtox" />
        </div>
        <div>
          <img
            src="/assets/home/accomplishments/surlatable.svg"
            alt="Surlatable"
          />
        </div>
        <div>
          <img src="/assets/home/accomplishments/singtel.svg" alt="Singtel" />
        </div>
        <div>
          <img src="/assets/home/accomplishments/banamex.svg" alt="Banamex" />
        </div>
        <div>
          <img src="/assets/home/accomplishments/orion.svg" alt="Orion" />
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  );
};

export default HomePage;
