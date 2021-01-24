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
  ],
};

const SectionTwo = () => {
  return (
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
          />
          <img
            src="/assets/home/section_two/right_arrow.svg"
            alt="right arrow"
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
              width="200px"
              height="272px"
              radius="8px"
              key={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
