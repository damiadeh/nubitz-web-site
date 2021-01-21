import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionThree.module.scss";

const SectionThree = () => {
  const distinctions = {
    items: [
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
      },
    ],
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapper_text}>
        <h2>Our Mission</h2>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the print.
        </p>
      </div>
      <div className={Styles.distinctions}>
        {distinctions.items.map((item) => (
          <SectionText
            number={item.number}
            description={item.text}
            mini
            width="unset"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
