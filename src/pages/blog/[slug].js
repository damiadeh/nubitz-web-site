import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../../components/primary-button/Button";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Styles from "../../styles/blogdetails.module.scss";
import { Divider } from "@material-ui/core";

const BlogPostDetails = () => {
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
            <li
              className={
                router.pathname.startsWith("/blog") ? Styles.active : ""
              }
            >
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
        <div className={Styles.hero_content}>
          <h3>
            Ut mattis iaculis nulla donec quam enim amet dictum a. Auctor tellus
            luctus.
          </h3>
          <p>28 DEC, 2020</p>
          <div>
            <img src="/assets/blog/facebook.svg" alt="/" />
            <img
              src="/assets/blog/twitter.svg"
              alt="/"
              style={{ margin: "0 15px" }}
            />
            <img src="/assets/blog/linkedin.svg" alt="/" />
          </div>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.wrapper_lhs}>
          <div>
            <p className={Styles.title}>More posts</p>
            <Divider />
            <div>
              <div className={Styles.featured}>
                <img src="/assets/blog/featured.png" alt="/" />
                <div>
                  <p>Basic git commands used for the hng task.</p>
                  <span>8 mins ago</span>
                </div>
              </div>
              <div className={Styles.featured}>
                <img src="/assets/blog/featured.png" alt="/" />
                <div>
                  <p>Basic git commands used for the hng task.</p>
                  <span>8 mins ago</span>
                </div>
              </div>
              <div className={Styles.featured}>
                <img src="/assets/blog/featured.png" alt="/" />
                <div>
                  <p>Basic git commands used for the hng task.</p>
                  <span>8 mins ago</span>
                </div>
              </div>
              <div className={Styles.featured}>
                <img src="/assets/blog/featured.png" alt="/" />
                <div>
                  <p>Basic git commands used for the hng task.</p>
                  <span>8 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.wrapper_rhs}>
          <div className={Styles.wrapper_section}>
            <p className={Styles.title}>Neque in elementum id.</p>
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
            <p>
              Pellentesque id viverra vel vitae etiam mauris at bibendum mi. At
              mauris leo, donec mus ac ac. Vulputate sollicitudin consectetur
              dui at bibendum sed vulputate mauris morbi. Turpis ullamcorper
              cursus pharetra, a commodo condimentum. Odio varius arcu sit sed
              urna, gravida malesuada nisl hac. Faucibus nunc justo massa et
              gravida eget id ut. Luctus enim sed non purus lectus vitae
              pellentesque ha.
            </p>
          </div>
          <div className={Styles.wrapper_section}>
            <p className={Styles.title}>Neque in elementum id.</p>
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
            <p>
              Pellentesque id viverra vel vitae etiam mauris at bibendum mi. At
              mauris leo, donec mus ac ac. Vulputate sollicitudin consectetur
              dui at bibendum sed vulputate mauris morbi. Turpis ullamcorper
              cursus pharetra, a commodo condimentum. Odio varius arcu sit sed
              urna, gravida malesuada nisl hac. Faucibus nunc justo massa et
              gravida eget id ut. Luctus enim sed non purus lectus vitae
              pellentesque ha.
            </p>
          </div>
          <img src="/assets/blog/postdetail.png" alt="/" />
          <div className={Styles.wrapper_section}>
            <p className={Styles.title} style={{ marginTop: "2vh" }}>
              Posuere lectus odio.
            </p>
            <p>
              Mauris volutpat maecenas quis molestie pellentesque sit diam
              egestas sed. Est ornare bibendum ut facilisis rhoncus porta
              habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
              Nulla sit lorem tortor, nunc. Sed lacus aliquet morbi sit lectus
              morbi. Varius suspendisse quis nascetur matti
            </p>
          </div>
          <div className={Styles.wrapper_quote}>
            <Divider />
            <p>
              “At faucibus ornare viverra fringilla aliquet at quis integer
              feugiat. Tortor, sit eu sed tellus fusce nisl. Enim justo, rhoncus
              in tortor tortor. Nullam ac faucibus faucibus a quam. Sit eu
              pellentesque quis a ac arcu sed. Penatibus pellentesque no”
            </p>
            <Divider />
          </div>
          <div className={Styles.wrapper_section}>
            <p className={Styles.title} style={{ marginTop: "2vh" }}>
              Bibendum accumsan ac.
            </p>
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
            <p>
              Pellentesque id viverra vel vitae etiam mauris at bibendum mi. At
              mauris leo, donec mus ac ac. Vulputate sollicitudin consectetur
              dui at
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default BlogPostDetails;
