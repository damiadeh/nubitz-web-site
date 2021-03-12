import { useRouter } from "next/router";

import Button from "../../../components/primary-button/Button";
import SectionText from "../../../components/section_text/SectionText";
import CaseStudy from "./object/caseStudyObject";
import Styles from "./sectionSix.module.scss";

const SectionSix = () => {
  const router = useRouter();
  const setItemInLocalStorage = (item) => {
    localStorage.setItem("caseStudy", JSON.stringify(item));
    router.push("/case-study");
  };

  return (
    <>
      <div className={Styles.container}>
        <SectionText
          welcome="Case study"
          title="Our portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mi lobortis enim, facilisis etiam."
        />
        <div className={Styles.main_wrapper}>
          {CaseStudy.items.map((item) => (
            <>
              {item.inverted !== true ? (
                <div className={Styles.wrapper}>
                  <div
                    className={Styles.portfolio}
                    style={{
                      backgroundColor: `${item.backgroundColor}`,
                    }}
                    onClick={() => {
                      let clonedItem = JSON.parse(JSON.stringify(item));
                      let names = Object.keys(clonedItem);
                      names.map((name) => {
                        if (name.startsWith("second")) {
                          delete clonedItem[name];
                        }
                      });

                      setItemInLocalStorage(clonedItem);
                    }}
                  >
                    <div
                      className={Styles.title}
                      style={{
                        color: `${item.textColor}`,
                      }}
                    >
                      <p>{item.name}</p>
                      <span>{item.product}</span>
                    </div>
                    <div className={Styles.image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div
                    className={Styles.portfolio}
                    style={{
                      backgroundColor: `${item.secondbackgroundColor}`,
                    }}
                    onClick={() => {
                      let clonedItem = JSON.parse(JSON.stringify(item));
                      let names = Object.keys(clonedItem);
                      names.map((name) => {
                        if (!name.startsWith("second")) {
                          delete clonedItem[name];
                        }
                      });

                      setItemInLocalStorage(clonedItem);
                    }}
                  >
                    <div
                      className={Styles.title}
                      style={{
                        color: `${item.secondtextColor}`,
                      }}
                    >
                      <p>{item.secondname}</p>
                      <span>{item.secondproduct}</span>
                    </div>
                    <div className={Styles.image}>
                      <img src={item.secondimage} alt={item.secondname} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={Styles.wrapper_inverted}>
                  <div
                    className={Styles.portfolio}
                    style={{
                      backgroundColor: `${item.backgroundColor}`,
                    }}
                    onClick={() => {
                      let clonedItem = JSON.parse(JSON.stringify(item));
                      let names = Object.keys(clonedItem);
                      names.map((name) => {
                        if (name.startsWith("second")) {
                          delete clonedItem[name];
                        }
                      });

                      setItemInLocalStorage(clonedItem);
                    }}
                  >
                    <div
                      className={Styles.title}
                      style={{
                        color: `${item.textColor}`,
                      }}
                    >
                      <p>{item.name}</p>
                      <span>{item.product}</span>
                    </div>
                    <div className={Styles.image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      let clonedItem = JSON.parse(JSON.stringify(item));
                      let names = Object.keys(clonedItem);
                      names.map((name) => {
                        if (!name.startsWith("second")) {
                          delete clonedItem[name];
                        }
                      });

                      setItemInLocalStorage(clonedItem);
                    }}
                    className={
                      item.secondimage ? Styles.portfolio : Styles.portfolio_add
                    }
                    style={
                      item.secondimage
                        ? {
                            backgroundColor: `${item.secondbackgroundColor}`,
                          }
                        : {
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#EEF3FE",
                            border: "0.5px solid #1958e3",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#1958e3",
                            fontWeight: "bold",
                          }
                    }
                  >
                    <div
                      className={item.secondimage && Styles.title}
                      style={
                        item.secondimage
                          ? {
                              color: `${item.secondtextColor}`,
                            }
                          : { marginRight: "10px", color: "#1958e3" }
                      }
                    >
                      <p>{item.secondname}</p>
                      <span>{item.secondproduct}</span>
                    </div>
                    {item.secondimage ? (
                      <div className={Styles.image}>
                        <img src={item.secondimage} alt={item.secondname} />
                      </div>
                    ) : (
                      <img
                        src="/assets/home/section-six/arrow.svg"
                        alt="arrow"
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* <div className={Styles.tagContainer}>
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
              <h2>Get the best with nubitz</h2>
              <p>We are an IT support and IT services company existing to help businesses develop solutions that help them achieve their own desired outcomes.</p>
              <p></p>
            </div>
            <div>
              <Button
                text="Get Started"
                // backgroundColor="#1958e3"
                // textColor="white"
                primary
              />
            </div>
          </div>
        </div>
      </div>
    */}
    </>
  );
};

export default SectionSix;
