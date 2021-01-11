import Styles from "./sectionText.module.scss";

const SectionText = ({ welcome, title, description, textColor, secondary }) => {
  return (
    <div className={Styles.text}>
      <p
        className={Styles.text_welcome}
        style={
          !secondary
            ? {
                color: " #2d5e98",
              }
            : { color: `${textColor}` }
        }
      >
        {welcome && welcome}
      </p>
      <h2
        className={Styles.text_title}
        style={
          !secondary
            ? {
                color: "#1e396e",
              }
            : { color: `${textColor}` }
        }
      >
        {title}
      </h2>
      <p
        className={Styles.text_description}
        style={
          !secondary
            ? {
                color: "#333533",
              }
            : { color: `${textColor}` }
        }
      >
        {description}
      </p>
    </div>
  );
};

export default SectionText;
