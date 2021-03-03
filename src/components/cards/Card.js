import Styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <div>
          <img src="/assets/home/header/one.svg" alt="experience" className={Styles.colored}/>
          <img src="/assets/home/header/experience.svg" alt="experience" className={Styles.white}/>
        </div>
        <p className={Styles.title}>30 years of experience</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <div>
          <img src="/assets/home/header/two.svg" alt="projects" className={Styles.colored}/>
          <img src="/assets/home/header/projects.svg" alt="projects" className={Styles.white}/>
        </div>
        <p className={Styles.title}>184 completed Projects</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <div>
          <img src="/assets/home/header/three.svg" alt="clients" className={Styles.colored}/>
          <img src="/assets/home/header/clients.svg" alt="clients" className={Styles.white}/>
        </div>
        <p className={Styles.title}>2345 clients</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
    </div>
  );
};

export default Card;
