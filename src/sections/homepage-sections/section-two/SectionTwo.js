import React, { useState } from "react";
import LittleCards from "../../../components/little-cards/LittleCards";
import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionTwo.module.scss";

const littleCards = {
  items: [
    {
      icon: "/assets/home/section_two/lamp.svg",
      title: "Digital Marketing",
      text:
        "In Nubitz, we help you create campanigns and content that drives traffic with our marketing strategies.",
      textColor: "rgba(249, 249, 249, 0.8)",
      titleColor: "#ffffff",
    },
    {
      icon: "/assets/home/section_two/code.svg",
      title: "Product Development",
      text:
        "We create the optimal platform to develop and run digital applications for our clients.",
      backgroundColor: "rgba(234, 241, 246, 0.72)",
    },
    {
      icon: "/assets/home/section_two/lamp.svg",
      title: "Web Development",
      text:
        "In Nubitz, we help you create campanigns and content that drives traffic with our marketing strategies.",
      textColor: "rgba(249, 249, 249, 0.8)",
      titleColor: "#ffffff",
    },
    {
      icon: "/assets/home/section_two/code.svg",
      title: "Cloud Development",
      text:
        "We create the optimal platform to develop and run digital applications for our clients.",
      backgroundColor: "rgba(234, 241, 246, 0.72)",
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
        <div>
          <SectionText
            welcome="Our services"
            title="Our Services Are Rendered In The Areas Of Technology"
            description="As one of the best IT service providers, we take pride in being able to offer you the best quality services that solves high impact buisness challenges."
          />
        </div>
        <div>
          <div className={Styles.arrows}>
            <img
              src="/assets/home/section_two/left_arrow.svg"
              alt="left arrow"
              style={{ marginRight: "3vh" }}
              onClick={goLeft}
            />
            <img
              src="/assets/home/section_two/right_arrow.svg"
              alt="right arrow"
              onClick={goRight}
            />
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
