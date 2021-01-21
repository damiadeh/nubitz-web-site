import Styles from "./sectionOne.module.scss";

const services = {
  items: [
    {
      image: "/assets/about/lamp.svg",
      name: "Digital Marketing",
    },
    {
      image: "/assets/about/code.svg",
      name: "Product Development",
    },
    {
      image: "/assets/about/deal.svg",
      name: "Product Design",
    },
    {
      image: "/assets/about/development.svg",
      name: "Web Development",
    },
    {
      image: "/assets/about/provider.svg",
      name: "Cloud Services",
    },
  ],
};

const SectionOne = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapper_text}>
        <h2>Our Services</h2>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the print.
        </p>
      </div>
      <div className={Styles.languages}>
        {services.items.map((item) => (
          <div>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
