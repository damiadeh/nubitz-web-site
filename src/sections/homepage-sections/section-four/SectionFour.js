import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionFour.module.scss";

const SectionFour = () => {
  const distinctions = {
    items: [
      {
        number: "/assets/home/section_four/01.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/home/section_four/02.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/home/section_four/03.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/home/section_four/04.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/home/section_four/05.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/home/section_four/06.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
    ],
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <p>Our distinctions</p>
        <h2>Why Choose Us</h2>
      </div>
      <div className={Styles.distinctions}>
        {distinctions.items.map((item) => (
          <SectionText
            number={item.number}
            title={item.title}
            description={item.text}
            mini
            width="unset"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
