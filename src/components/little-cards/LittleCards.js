import Styles from "./littleCards.module.scss";

const LittleCards = ({
  icon,
  title,
  text,
  slide,
  width,
  height,
  radius,
  backgroundColor,
  textColor,
  titleColor,
}) => {
  let useStyle = {
    // backgroundColor: "#026AAF",
    background: "#214A7E",
    height: `${height}`,
    borderRadius: `${radius}`,
    transform: `translateX(${slide}%)`,
  };

  if (backgroundColor) {
    useStyle = {
      backgroundColor: `${backgroundColor}`,
      height: `${height}`,
      borderRadius: `${radius}`,
      border: "0.5px solid #C2D9EB",
      color: "#026AAF",
      transform: `translateX(${slide}%)`,
    };
  }

  return (
    <div className={Styles.card} style={useStyle}>
      <div className={Styles.card_icon}>
        <img src={icon} alt="icon" />
      </div>
      <p
        className={Styles.card_title}
        style={{
          color: `${titleColor}`,
        }}
      >
        {title}
      </p>
      <p
        className={Styles.card_text}
        style={{
          color: `${textColor}`,
          width: `${width}`,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default LittleCards;
