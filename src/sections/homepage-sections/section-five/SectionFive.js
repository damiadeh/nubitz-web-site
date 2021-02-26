import React, { useState } from "react";
import { Divider } from "@material-ui/core";
import Styles from "./sectionFive.module.scss";

const testimonials = {
  items: [
    {
      client: "Alvin Williams",
      review:
        "I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!",
    },
    {
      client: "Brie Marvel",
      review:
        "I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!",
    },
    {
      client: "Johnathan Peters",
      review:
        "I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!",
    },
    {
      client: "Darcy Greene",
      review:
        "I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!",
    },
    {
      client: "Gertrude Doe",
      review:
        "I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!",
    },
  ],
};

const SectionFive = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (testimonials.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -400 ? setX(0) : setX(x - 100);
  };

  return (
    <div className={Styles.main}>
      <img
        src="/assets/home/bubbles/bubble-three.svg"
        alt="/"
        className={Styles.bubble}
      />
      <div className={Styles.container}>
        <div className={Styles.title}>
          <p>Clients Review</p>
          <h2>Testimonials</h2>
        </div>
        <div className={Styles.slider}>
          {testimonials.items.map((item) => (
            <div
              className={Styles.client}
              style={{
                transform: `translateX(${x}%)`,
              }}
            >
              <div className={Styles.client_details}>
                <img
                  src="/assets/home/section_five/left_arrow.svg"
                  alt="left_arrow"
                  onClick={goLeft}
                />
                <div>
                  <p className={Styles.client_details_name}>{item.client}</p>
                  <p className={Styles.client_details_title}>
                    Chief Consultant - <b>Teckit</b>
                  </p>
                </div>
              </div>
              <Divider orientation="vertical" />
              <div className={Styles.client_remarks}>
                <p>{`${item.review}`}</p>
                <img
                  src="/assets/home/section_five/right_arrow.svg"
                  alt="right_arrow"
                  onClick={goRight}
                />
              </div>
              <div className={Styles.client_mobileArrows}>
                <img
                  src="/assets/home/section_five/left_arrow.svg"
                  alt="left_arrow"
                  style={{ marginRight: "10px" }}
                  onClick={goLeft}
                />
                <img
                  src="/assets/home/section_five/right_arrow.svg"
                  alt="right_arrow"
                  onClick={goRight}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
