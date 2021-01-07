import Styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <div>icon</div>
        <p className={Styles.title}>30 years of experience</p>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={Styles.card}>
        <div>icon</div>
        <p className={Styles.title}>184 completed Projects</p>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={Styles.card}>
        <div>icon</div>
        <p className={Styles.title}>2345 clients</p>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;
