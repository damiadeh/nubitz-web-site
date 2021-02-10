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
            backgroundColor="#026AAF"
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
      <div className={Styles.hero}>
        <SectionText
          textColor="#1E396E"
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
