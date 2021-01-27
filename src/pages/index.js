import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../components/cards/Card";

import Button from "../components/primary-button/Button";
import SectionFive from "../sections/homepage-sections/section-five/SectionFive";
import SectionFour from "../sections/homepage-sections/section-four/SectionFour";
import SectionOne from "../sections/homepage-sections/section-one/SectionOne";
import SectionSix from "../sections/homepage-sections/section-six/SectionSix";
import SectionThree from "../sections/homepage-sections/section-three/SectionThree";
import SectionTwo from "../sections/homepage-sections/section-two/SectionTwo";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Styles from "../styles/home.module.scss";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.background_video}>
          <video
            src={require("../../public/assets/home/header/hero-video.mp4")}
            muted
            loop
            autoPlay
          ></video>
          <div className={Styles.overlay}></div>
        </div>
      </div>
      <div className={Styles.content}>
        <nav>
          <div className={Styles.logo_container}>
            <Link href="/">
              <Image
                src="/assets/home/header/logo.svg"
                width="100"
                height="50"
                alt="nubitz-logo"
              />
            </Link>
          </div>
          <div className={Styles.nav_items}>
            <ul>
              <li className={router.pathname === "/about" ? Styles.active : ""}>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/project-brief" ? Styles.active : ""
                }
              >
                <Link href="/project-brief">
                  <a>Project request</a>
                </Link>
              </li>
              <li className={router.pathname === "/blog" ? Styles.active : ""}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li
                className={router.pathname === "/career" ? Styles.active : ""}
              >
                <Link href="/career">
                  <a>Get hired</a>
                </Link>
              </li>
            </ul>
            <Button text="Get Started" primary />
          </div>

          <div className={Styles.hamburger}>
            <Image
              src="/assets/menu-white.svg"
              width="30"
              height="30"
              alt="hamburger-menu"
            />
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
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
