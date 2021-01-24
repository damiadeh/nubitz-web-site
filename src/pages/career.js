import Image from "next/image";
import Link from "next/link";

import Button from "../components/primary-button/Button";
import Styles from "../styles/career.module.scss";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const vacancies = {
  items: [
    {
      title: "Product Designer",
      datePosted: "2 Days ago",
      jobType: "Full Time",
    },
    {
      title: "Information Technology Officer",
      datePosted: "3 Days ago",
      jobType: "Part-Time",
    },
    {
      title: "Buisness evelopment Manager",
      datePosted: "5 Days ago",
      jobType: "Contract",
    },
  ],
};

const offers = {
  items: [
    {
      image: "/assets/career/O1.svg",
      title: "High Quality Handware",
      description:
        "We create the optimal platform to develop and run digital applications for our clients",
    },
    {
      image: "/assets/career/O2.svg",
      title: "Dedicated 24/7",
      description:
        "We create the optimal platform to develop and run digital applications for our clients",
    },
    {
      image: "/assets/career/O3.svg",
      title: "Agile and Fast Working Style",
      description:
        "We create the optimal platform to develop and run digital applications for our clients",
    },
    {
      image: "/assets/career/O4.svg",
      title: "High Quality Handware",
      description:
        "We create the optimal platform to develop and run digital applications for our clients",
    },
    {
      image: "/assets/career/O5.svg",
      title: "Dedicated 24/7",
      description:
        "We create the optimal platform to develop and run digital applications for our clients",
    },
    {
      image: "/assets/career/O6.svg",
      title: "Agile and Fast Working Style",
      description:
        "We create the optimal platform to develop and run digital applications for our clients",
    },
  ],
};

const Career = () => (
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
        <Image
          src="/assets/menu-dark.svg"
          width="30"
          height="30"
          alt="hamburger-menu"
        />
      </div>
    </nav>
    <div className={Styles.hero}>
      <div className={Styles.textWrapper}>
        <h3>Join the better team</h3>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the
        </p>
      </div>
      <div className={Styles.heroImages}>
        <img src="/assets/career/hero-one.png" alt="hero-one" />
        <img src="/assets/career/hero-two.png" alt="hero-one" />
      </div>
    </div>
    <div className={Styles.vacancies}>
      <div className={Styles.textWrapper}>
        <h3>We’re Hiring</h3>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the print
        </p>
      </div>
      <div className={Styles.vacancyWrapper}>
        {vacancies.items.map((vacancy) => (
          <div className={Styles.vacancy}>
            <div className={Styles.vacancy_top}>
              <p>{vacancy.title}</p>
              <span>{vacancy.datePosted}</span>
            </div>
            <div className={Styles.vacancy_mid}>
              <div>
                <p>{vacancy.jobType}</p>
              </div>
            </div>
            <div className={Styles.vacancy_bottom}>
              <img src="/assets/career/location.svg" alt="location" />
              <p>Seoul, South Korea</p>
            </div>
            <button>
              Apply
              <img src="/assets/career/arrow.svg" alt="/" />
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className={Styles.offers}>
      <div className={Styles.textWrapper}>
        <h3>Why you should join us</h3>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the print
        </p>
      </div>
      <div className={Styles.offerWrapper}>
        {offers.items.map((offer) => (
          <div className={Styles.offer}>
            <img src={offer.image} alt="/" />
            <div>
              <p className={Styles.offer_title}>{offer.title}</p>
              <p className={Styles.offer_description}>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Contact />
    <Footer />
  </div>
);

export default Career;
