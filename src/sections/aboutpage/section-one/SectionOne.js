import { useRouter } from "next/router";
import Styles from "./sectionOne.module.scss";

import servicesObject from "./object/servicesObject";

const SectionOne = () => {
  const router = useRouter();

  const setServiceItemInLocalStorage = (service) => {
    localStorage.setItem("currentServiceItem", JSON.stringify(service));
    router.push("/services");
  };

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
        {servicesObject.items.map((item) => (
          <div key={item.id} onClick={() => setServiceItemInLocalStorage(item)}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
