import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../components/primary-button/Button";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Styles from "../../styles/blog.module.scss";

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
      id: 3,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 4,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 5,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 6,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 7,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 8,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 9,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 10,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 11,
    },
    {
      profile: "/assets/blog/profile.png",
      image: "/assets/blog/post.png",
      title: "We are the world’s leading",
      content:
        "Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",
      author: "Eric Mart",
      date: "28 Dec, 2020",
      id: 12,
    },
  ],
};

const blog = () => {
  const router = useRouter();

  return (
    <div className={Styles.container}>
      <div className={Styles.hero}>
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
          <h3>Ut mattis iaculis nulla donec quam</h3>
          <p>
            Mauris volutpat maecenas quis molestie pellentesque sit diam egestas
          </p>
          <div className={Styles.hero_person}>
            <img src="/assets/blog/profile.png" alt="/" />
            <div>
              <p>Eric Mart</p>
              <span>28 Dec, 2020</span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.post}>
        {posts.items.map((post) => (
          <Link href={`/blog/${encodeURIComponent(post.title)}`}>
            <div key={post.id}>
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
      <Contact />
      <Footer />
    </div>
  );
};

export default blog;
