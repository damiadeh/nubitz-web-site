import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
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
import { Style } from "@material-ui/icons";

const companies = {
  items: [
    {
      image: "/assets/home/accomplishments/medtox.svg",
      active: "/assets/home/accomplishments-active/medtox.svg",
      name: "Medtox",
      id: 1,
    },
    {
      image: "/assets/home/accomplishments/surlatable.svg",
      active: "/assets/home/accomplishments-active/surlatable.svg",
      name: "Surlatable",
      id: 2,
    },
    {
      image: "/assets/home/accomplishments/singtel.svg",
      active: "/assets/home/accomplishments-active/singtel.svg",
      name: "Singtel",
      id: 3,
    },
    {
      image: "/assets/home/accomplishments/banamex.svg",
      active: "/assets/home/accomplishments-active/banamex.svg",
      name: "Banamex",
      id: 4,
    },
    {
      image: "/assets/home/accomplishments/surlatable.svg",
      active: "/assets/home/accomplishments-active/surlatable.svg",
      name: "Surlatable",
      id: 2,
    },
    {
      image: "/assets/home/accomplishments/singtel.svg",
      active: "/assets/home/accomplishments-active/singtel.svg",
      name: "Singtel",
      id: 3,
    },
    {
      image: "/assets/home/accomplishments/banamex.svg",
      active: "/assets/home/accomplishments-active/banamex.svg",
      name: "Banamex",
      id: 4,
    },
    {
      image: "/assets/home/accomplishments/orion.svg",
      active: "/assets/home/accomplishments-active/orion.svg",
      name: "Orion",
      id: 5,
    },
  ],
};

const distinctions = {
  items: [
    {
      number: "/assets/home/subsection/O1.svg",
      title: "High Quality Handware",
      text:
        "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textis simply dummy text of the print",
      id: 1,
    },
    {
      number: "/assets/home/subsection/O2.svg",
      title: "High Quality Handware",
      text:
        "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textis simply dummy text of the print",
      id: 2,
    },
    {
      number: "/assets/home/subsection/O3.svg",
      title: "High Quality Handware",
      text:
        "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textis simply dummy text of the print",
      id: 3,
    },
  ],
};

const posts = {
  items: [
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      animate: "fade-left",
      id: 1,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      animate: "fade-up",
      id: 2,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      animate: "fade-right",
      id: 3,
    },
  ],
};

const HomePage = () => {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className={Styles.container}>
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
          <img
            src="/assets/menu-white.svg"
            alt="close-menu"
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
      <div className={Styles.videoContainer}>
        <video
          src={require("../../public/assets/home/header/hero-video.mp4")}
          muted
          loop
          autoPlay
        ></video>
        <img src="/assets/home-hero.png" alt="/" className={Styles.heroImage} />
        <div className={Styles.overlay}></div>
        <div className={Styles.accomplishments}>
          <Card />
        </div>
        <div className={Styles.hero}>
          <div className={Styles.hero_text}>
            <h1>We solve problems related to IT infrastructure</h1>
            <p>
              We are a software development and digital marketing company
              existing to help businesses develop solutions.
            </p>
            <Button text="Get Started" primary />
          </div>
        </div>
      </div>
      <div className={Styles.accomplishmentsMobile}>
        <Card />
      </div>
      {/* <div className={Styles.companies}>
        {companies.items.map((item) => (
          <div key={item.id}>
            {id === item.id ? (
              <img
                src={item.active}
                alt={item.name}
                onMouseLeave={() => setId(null)}
              />
            ) : (
              <img
                src={item.image}
                alt={item.name}
                onMouseEnter={() => setId(item.id)}
              />
            )}
          </div>
        ))}
      </div> */}
      {/* <SectionOne /> */}
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <div className={Styles.company}>
        <div className={Styles.title}>
          <p>Our distinctions</p>
          <h2>Why Choose Us</h2>
        </div>
        <div className={Styles.companies}>
          {companies.items.map((item) => (
            <div key={item.id}>
              {id === item.id ? (
                <img
                  src={item.active}
                  alt={item.name}
                  onMouseLeave={() => setId(null)}
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  onMouseEnter={() => setId(item.id)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <SectionFive />
      {/* <div className={Styles.choose}>
        <h2>Here’s Why you should Choose us</h2>
        <div className={Styles.distinctions}>
          {distinctions.items.map((item) => (
            <div key={item.number}>
              <img src={item.number} src={item.number} />
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div> */}
      <SectionSix />
      <div className={Styles.postContainer}>
        <div className={Styles.heading}>
          <p>Our Blog</p>
          <h2>Nubitz News</h2>
        </div>
        <div className={Styles.post}>
          {posts.items.map((post) => (
            <Link href={`/blog/${encodeURIComponent(post.title)}`}>
              <div key={post.id} data-aos="zoom-in">
                <img src={post.image} alt="/" />
                <div className={Styles.post_content}>
                  <h5>{post.title}</h5>
                  <p>{post.content}</p>
                  <div className={Styles.post_person}>
                    <img src={post.profile} alt="/" />
                    <div>
                      <p>{post.author}</p>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <span>View All Articles</span>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
