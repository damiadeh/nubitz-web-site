import Image from "next/image";
import Card from "../components/cards/Card";

import Button from "../components/primary-button/Button";
import Styles from "../styles/home.module.scss";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.background_video}>
        <video
          src={require("../../public/assets/home/hero-video.mp4")}
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
              src="/assets/home/logo.svg"
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
        <div className={Styles.card}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
