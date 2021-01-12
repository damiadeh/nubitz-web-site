import Styles from "./sectionText.module.scss";

const SectionText = ({
  welcome,
  title,
  width,
  description,
  textColor,
  secondary,
  number,
  mini,
}) => {
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
        {number && <img src={number} alt="/" />}
      </p>
      {!mini ? (
        <h2
          className={Styles.text_title}
          style={
            !secondary
              ? {
                  color: "#101112",
                }
              : { color: `${textColor}` }
          }
        >
          {title}
        </h2>
      ) : (
        <p
          className={Styles.text_title_mini}
          style={
            !secondary
              ? {
                  color: "#101112",
                }
              : { color: `${textColor}` }
          }
        >
          {title}
        </p>
      )}

      {!mini ? (
        <p
          className={Styles.text_description}
          style={
            !secondary
              ? {
                  color: "#333533",
                  width: `${width}`,
                }
              : { color: `${textColor}`, width: `${width}` }
          }
        >
          {description}
        </p>
      ) : (
        <p
          className={Styles.text_description_mini}
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
      )}
    </div>
  );
};

export default SectionText;
