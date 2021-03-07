import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../components/primary-button/Button";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Styles from "../styles/about.module.scss";
import SectionOne from "../sections/aboutpage/section-one/SectionOne";
import SectionTwo from "../sections/aboutpage/section-two/SectionTwo";
import SectionThree from "../sections/aboutpage/section-three/SectionThree";

const About = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={Styles.container}>
      <nav>
        <div className={Styles.logo_container}>
          <Link href="/">
            <Image
              src="/assets/logo.svg" 
              width="120"
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
                router.pathname === "/project-request" ? Styles.active : ""
              }
            >
              <Link href="/project-request">
                <a>Project request</a>
              </Link>
            </li>
            <li className={router.pathname === "/blog" ? Styles.active : ""}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={router.pathname === "/career" ? Styles.active : ""}>
              <Link href="/career">
                <a>Get hired</a>
              </Link>
            </li>
          </ul>

          <Button
            text="Contact Us"
            route="/contact-us"
            backgroundColor="#214A7E"
            textColor="white"
          />
        </div>
        <div className={Styles.hamburger}>
          <img
            src="/assets/menu-dark.svg"
            alt="hamburger-menu"
            onClick={() => setOpenMenu(true)}
          />
        </div>
        {openMenu && (
          <div className={Styles.mobileNav}>
            <div className={Styles.mobileNav_top}>
              <Link href="/">
                <img src="/assets/logo-dark.svg" alt="logo-mobile" />
              </Link>
              <img
                src="/assets/close.svg"
                alt="close-menu"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <div className={Styles.mobileNav_lists}>
              <ul>
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/project-request">Project request</Link>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/career">Get hired</Link>
                </li>
              </ul>
            </div>
            <button className={Styles.mobileNav_button}>Get Started</button>
          </div>
        )}
      </nav>
      <div className={Styles.wrapper}>
        <div className={Styles.wrapper_text}>
          <h2>Who we are</h2>
          <p>
            We are a global IT company, specializing in strategic IT business
            solutions and services for complex business problems, in multiple
            industry sectors including retail, healthcare, finance, education,
            and more. Our vast technology and industry expertise enable us to
            focus on cutting-edge internet technologies with the aim to develop
            scalable, secure and easy-to-use web applications that work across
            multiple devices. Our belief is that a good design along with the
            judicious use of technology; helps simplify things, provide valuable
            insights, connect people - all of which ultimately helps in the
            success of a business.
          </p>
        </div>
        <div className={Styles.imageGrid}>
          <div className={Styles.imageGrid_lhs}>
            <img src="/assets/about/big-image.png" alt="section_one" />
          </div>
          <div className={Styles.imageGrid_rhs}>
            <div className={Styles.imageGrid_rhs_top}>
              <div className={Styles.imageGrid_rhs_top_one}>
                <img src="/assets/about/small-one.png" alt="section_one" />
              </div>
              <div className={Styles.imageGrid_rhs_top_two}>
                <img src="/assets/about/small-two.png" alt="section_one" />
              </div>
            </div>
            <div className={Styles.imageGrid_rhs_bottom}>
              <div className={Styles.imageGrid_rhs_bottom_three}>
                <img src="/assets/about/small-three.png" alt="section_one" />
              </div>
              <div className={Styles.imageGrid_rhs_bottom_four}>
                <img src="/assets/about/small-four.png" alt="section_one" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
