import { Divider } from "@material-ui/core";
import Styles from "./sectionFive.module.scss";

const SectionFive = () => {
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
        <div className={Styles.client}>
          <div className={Styles.client_details}>
            <img
              src="/assets/home/section_five/left_arrow.svg"
              alt="left_arrow"
            />
            <div>
              <p className={Styles.client_details_name}>Alvin Williams</p>
              <p className={Styles.client_details_title}>
                Chief Consultant - <b>Teckit</b>
              </p>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={Styles.client_remarks}>
            <p>
              “I was marvelled by the services i got. Nubitz team innovative
              technology has greatly helped us improve our processes, thereby
              creating a better experience for all stakeholders. Great work,
              highly recommended!”
            </p>
            <img
              src="/assets/home/section_five/right_arrow.svg"
              alt="right_arrow"
            />
          </div>
          <div className={Styles.client_mobileArrows}>
            <img
              src="/assets/home/section_five/left_arrow.svg"
              alt="left_arrow"
              style={{ marginRight: "10px" }}
            />
            <img
              src="/assets/home/section_five/right_arrow.svg"
              alt="right_arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
