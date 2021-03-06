import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../components/primary-button/Button";
import Styles from "../styles/project-request.module.scss";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import SectionText from "../components/section_text/SectionText";
import Stepper from "../components/stepper/stepper";

const ProjectRequest = () => {
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
            backgroundColor="#214a7e"
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
            <Link href="/contact-us">
              <button className={Styles.mobileNav_button}>Contact Us</button>
            </Link>
          </div>
        )}
      </nav>
      <div className={Styles.hero}>
        <SectionText
          textColor="#214a7e"
          title="Ut mattis iaculis nulla donec quam enim amet dictum a. Auctor."
          description="Mauris volutpat maecenas quis molestie pellentesque sit diam egestas sed. Est ornare bibendum ut facilisis rhoncus porta habitant. Scelerisque amet ut posuere sit nulla urna vitae amet. Nulla sit lorem tortor, nunc. Sed"
        />
      </div>
      <Stepper />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectRequest;
