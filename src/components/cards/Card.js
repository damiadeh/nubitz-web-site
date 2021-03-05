import Styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <div className={Styles.number}>
          {/* <img src="/assets/home/header/one.svg" alt="experience" className={Styles.colored}/>
          <img src="/assets/home/header/experience.svg" alt="experience" className={Styles.white}/> */}
          3+
        </div>
        <p className={Styles.title}>years of experience</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <div className={Styles.number}>
          {/* <img src="/assets/home/header/two.svg" alt="projects" className={Styles.colored}/>
          <img src="/assets/home/header/projects.svg" alt="projects" className={Styles.white}/> */}
          200+
        </div>
        <p className={Styles.title}>completed Projects</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <div className={Styles.number}>
          {/* <img src="/assets/home/header/three.svg" alt="clients" className={Styles.colored}/>
          <img src="/assets/home/header/clients.svg" alt="clients" className={Styles.white}/> */}
          30+
        </div>
        <p className={Styles.title}>clients</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
    </div>
  );
};

export default Card;
