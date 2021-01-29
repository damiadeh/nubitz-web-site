import Button from "../../../components/primary-button/Button";
import SectionText from "../../../components/section_text/SectionText";
import Porfolio from "./object/PortfolioObject";
import Styles from "./sectionSix.module.scss";

const SectionSix = () => {
  return (
    <>
      <div className={Styles.container}>
        <SectionText
          welcome="Case study"
          title="Our portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mi lobortis enim, facilisis etiam."
        />
        <div className={Styles.main_wrapper}>
          <div className={Styles.wrapper}>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#234085",
              }}
            >
              <div className={Styles.title}>
                <p>Annexa</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img src="/assets/home/section-six/annexa.svg" alt="Annexa" />
              </div>
            </div>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#D1E1E1",
              }}
            >
              <div className={Styles.title}>
                <p>Docxna</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img src="/assets/home/section-six/docxna.svg" alt="Docxna" />
              </div>
            </div>
          </div>
          <div className={Styles.wrapper_inverted}>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#01DBF0",
              }}
            >
              <div className={Styles.title}>
                <p>Hire Me</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img src="/assets/home/section-six/hire.svg" alt="Hire Me" />
              </div>
            </div>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#796AF2",
              }}
            >
              <div className={Styles.title}>
                <p>Danco</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img src="/assets/home/section-six/danco.svg" alt="Danco" />
              </div>
            </div>
          </div>
          <div className={Styles.wrapper}>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#FF5E95",
              }}
            >
              <div className={Styles.title}>
                <p>Telescope</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img
                  src="/assets/home/section-six/telescope.svg"
                  alt="Telescope"
                />
              </div>
            </div>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#00601B",
              }}
            >
              <div className={Styles.title}>
                <p>Hire Me</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img
                  src="/assets/home/section-six/hire_green.svg"
                  alt="Hire Me"
                />
              </div>
            </div>
          </div>
          <div className={Styles.wrapper_inverted}>
            <div
              className={Styles.portfolio}
              style={{
                backgroundColor: "#505252",
              }}
            >
              <div className={Styles.title}>
                <p>Docxna</p>
                <span>Product Design, UI/UX</span>
              </div>
              <div className={Styles.image}>
                <img
                  src="/assets/home/section-six/docxna_grey.svg"
                  alt="Docxna"
                />
              </div>
            </div>
            <div
              className={Styles.portfolio_add}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EEF3FE",
                border: "0.5px solid #214A7E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#214A7E",
                fontWeight: "bold",
              }}
            >
              <p style={{ marginRight: "10px" }}>Add your own project</p>
              <img src="/assets/home/section-six/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.tagContainer}>
        <div className={Styles.main}>
          <div className={Styles.tagline}>
            <img
              src="/assets/home/bubbles/bubble-four.svg"
              alt="/"
              className={Styles.bubble}
            />
            <img
              src="/assets/home/bubbles/bubble-five.svg"
              alt="/"
              className={Styles.bubble}
            />
            <div>
              <SectionText
                title="Get the best with nubitz"
                description="We are an IT support and IT services company existing to help businesses develop solutions that help them achieve their own desired outcomes."
                width="560px"
              />
            </div>
            <div>
              <Button
                text="Get Started"
                backgroundColor="#214A7E"
                textColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
