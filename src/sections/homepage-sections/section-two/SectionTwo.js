import React, { useState } from "react";
import LittleCards from "../../../components/little-cards/LittleCards";
import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionTwo.module.scss";

const littleCards = {
  items: [
    {
      icon: "/assets/home/section_two/code2.svg",
      title: "Web-development",
      text:
        "Nubitz delivers full stack customer software development along with a wide range of comprehensive solutions to reimagine and upgrade your digital presence.",
      textColor: "rgba(249, 249, 249, 0.8)",
      titleColor: "#ffffff",
    },
    {
      icon: "/assets/home/section_two/code1.svg",
      title: "Product Development",
      text:
        "We create the optimal platform to develop and run digital applications for our clients.",
      backgroundColor: "#f5f8ff",
    },
    {
      icon: "/assets/home/section_two/code2.svg",
      title: "Web Development",
      text:
        "In Nubitz, we help you create campanigns and content that drives traffic with our marketing strategies.",
      textColor: "rgba(249, 249, 249, 0.8)",
      titleColor: "#ffffff",
    },
    {
      icon: "/assets/home/section_two/code1.svg",
      title: "Cloud Development",
      text:
        "We create the optimal platform to develop and run digital applications for our clients.",
      backgroundColor: "#f5f8ff",
    },
  ],
};

const SectionTwo = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (littleCards.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -200 ? setX(0) : setX(x - 100);
  };

  return (
    <div className={Styles.main}>
      <img
        src="/assets/home/bubbles/bubble-one.svg"
        alt="/"
        className={Styles.bubble}
      />
      <div className={Styles.container}>
        <div className={Styles.content}>
          {/* <SectionText
            welcome="Our services"
            title="Our Services Are Rendered In The Areas Of Technology"
            description="As one of the best IT service providers, we take pride in being able to offer you the best quality services that solves high impact buisness challenges."
          /> */}
          <h2>Services we provide</h2>
          <p>Leveraging our in-depth expertise, we quickly and effectively deliver a leading solution for your needs. Capitalize on your market potential, increase cash flows, and gauge interest among your clientele by upgrading your strategy, design, software development, data analytics and machine learning.</p>
        </div>
        <div>
          <div className={Styles.arrows}>
            <img
              src="/assets/home/section_two/right-arrow.svg"
              alt="left arrow"
              style={{ marginRight: "1vh" }}
              onClick={goLeft}
            />
            <img
              src="/assets/home/section_two/left-arrow.svg"
              alt="right arrow"
              onClick={goRight}
            />
            <h3>01/<span>04</span></h3>
          </div>
          <div className={Styles.cards}>
            {littleCards.items.map((item) => (
              <LittleCards
                icon={item.icon}
                title={item.title}
                text={item.text}
                titleColor={item.titleColor}
                textColor={item.textColor}
                backgroundColor={item.backgroundColor}
                width="520px"
                height="420px"
                radius="8px"
                slide={x}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
