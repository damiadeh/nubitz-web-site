import Image from "next/image";
import Link from "next/link";

import Button from "../components/primary-button/Button";
import Styles from "../styles/contact.module.scss";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const ContactUs = () => {
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
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/project-brief">
                <a>Project request</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <a>Get hired</a>
            </li>
          </ul>
          <Button
            text="Contact Us"
            backgroundColor="#214A7E"
            textColor="white"
          />
        </div>
        <div className={Styles.hamburger}>
          <Image
            src="/assets/menu-dark.svg"
            width="30"
            height="30"
            alt="hamburger-menu"
          />
        </div>
      </nav>

      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
