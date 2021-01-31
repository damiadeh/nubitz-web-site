import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../components/primary-button/Button";
import Styles from "../styles/case-study.module.scss";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import SectionThree from "../sections/homepage-sections/section-three/SectionThree";

const CaseStudy = () => {
  const router = useRouter();

  return (
    <div className={Styles.container}>
      <nav>
        <div className={Styles.logo_container}>
          <Link href="/">
            <Image
              src="/assets/home/header/logo.svg"
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
          <Button text="Get Started" primary />
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
        <div className={Styles.hero_container}>
          <div className={Styles.hero_text}>
            <img src="/assets/case-study/ova-logo.svg" alt="ova-logo" />
            <h3>OVA PAY</h3>
            <p>Product Design, UI/UX</p>
          </div>
          <div className={Styles.hero_image}>
            <img src="/assets/case-study/iphone.svg" alt="/" />
          </div>
        </div>
      </div>
      <div className={Styles.overviews}>
        <h5>Overview {"&"} Problems</h5>
        <div className={Styles.overviews_wrapper}>
          <div className={Styles.overviews_lhs}>
            <p>
              Mauris volutpat maecenas quis molestie pellentesque sit diam
              egestas sed. Est ornare bibendum ut facilisis rhoncus porta
              habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
              Nulla sit lorem tortor, nunc. Sed lacus aliquet morbi sit lectus
              morbi. Varius suspendisse quis nascetur mattis risus a, eget.
              Habitant venenatis augue senectus tellus sed ullamcorper etiam
              proin. Molestie faucibus aliquet congue quis sed vitae quis. Nibh
              ut consequat netus quis egestas libero.
            </p>
          </div>
          <div className={Styles.overviews_rhs}>
            <div className={Styles.overviews_rhs_container}>
              <h4>OVA PAY</h4>
              <hr />
              <div className={Styles.overviews_rhs_item}>
                <p>Industry</p>
                <div></div>
                <p>Fintech</p>
              </div>
              <div className={Styles.overviews_rhs_item}>
                <p>Industry</p>
                <div></div>
                <p>Fintech</p>
              </div>
              <div className={Styles.overviews_rhs_item}>
                <p>Industry</p>
                <div></div>
                <p>Fintech</p>
              </div>
            </div>
            <Button
              text="View Live Site >>"
              backgroundColor="#00103C"
              textColor="white"
            />
          </div>
        </div>
      </div>
      <div className={Styles.solutions}>
        <h5>Solution Delivered</h5>
        <div className={Styles.solutions_wrapper}>
          <div className={Styles.solutions_lhs}>
            <p>
              Mauris volutpat maecenas quis molestie pellentesque sit diam
              egestas sed. Est ornare bibendum ut facilisis rhoncus porta
              habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
              Nulla sit lorem tortor, nunc.
            </p>
          </div>
          <div className={Styles.solutions_rhs}>
            <div className={Styles.solutions_rhs_item}>
              <div></div>
              <p>
                habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
                Nulla sit lorem tortor, nunc.
              </p>
            </div>
            <div className={Styles.solutions_rhs_item}>
              <div></div>
              <p>
                habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
                Nulla sit lorem tortor, nunc.
              </p>
            </div>
            <div className={Styles.solutions_rhs_item}>
              <div></div>
              <p>
                habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
                Nulla sit lorem tortor, nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionThree />
      <div className={Styles.reviews}>
        <img src="/assets/case-study/quote.svg" alt="quote" />
        <h5>Client’s Review</h5>
        <p>
          Mauris volutpat maecenas quis molestie pellentesque sit diam egestas
          sed. Est ornare bibendum ut facilisis rhoncus porta habitant.
          Scelerisque amet ut posuere sit nulla urna vitae amet. Nulla sit lorem
          tortor, nunc.
        </p>
        <span>Alwe Ola - CEO Alwena Ltd</span>
      </div>
      <div className={Styles.projects}>
        <hr
          style={{
            background: "rgba(0, 16, 60, 0.32)",
          }}
        />
        <h5>Other Projects We’ve Worked On</h5>
        <div className={Styles.projects_wrapper}>
          <div className={Styles.projects_item}>
            <img src="/assets/case-study/project.png" alt="/" />
            <div className={Styles.projects_item_text}>
              <h5>Facebook</h5>
              <span>Web Development</span>
            </div>
          </div>
          <div className={Styles.projects_item}>
            <img src="/assets/case-study/project.png" alt="/" />
            <div className={Styles.projects_item_text}>
              <h5>Spotify</h5>
              <span>Web Development</span>
            </div>
          </div>
          <div className={Styles.projects_item}>
            <img src="/assets/case-study/project.png" alt="/" />
            <div className={Styles.projects_item_text}>
              <h5>Greenish</h5>
              <span>Web Development</span>
            </div>
          </div>
        </div>
        <hr
          style={{
            background: "rgba(0, 16, 60, 0.32)",
          }}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default CaseStudy;
