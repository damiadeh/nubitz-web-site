import React, { useState } from "react";
import { useRouter } from "next/router";
import SectionText from "../../../components/section_text/SectionText";
import servicesObject from "../../aboutpage/section-one/object/servicesObject";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Styles from "./sectionThree.module.scss";

const useStyles = makeStyles(() => ({
  root: {
    padding: "6px 0",
  },
  divider: {
    height: "200px",
  },
  timelineDot: {
    color: "rgba(253, 253, 253, 0.6)",
    backgroundColor: "rgba(253, 253, 253, 0.6)",
  },
  timelineDotWhite: {
    color: "white",
    backgroundColor: "white",
  },
  timelineContent: {
    color: "rgba(253, 253, 253, 0.6)",
  },
  timelineContentWhite: {
    color: "white",
  },
  timelineConnector: {
    color: "rgba(253, 253, 253, 0.6)",
    backgroundColor: "rgba(253, 253, 253, 0.6)",
  },
}));

const languages = {
  items: [
    {
      image: "/assets/home/section_three/java.svg",
      name: "Java",
      id: 1,
    },
    {
      image: "/assets/home/section_three/ruby.svg",
      name: "Ruby",
      id: 2,
    },
    {
      image: "/assets/home/section_three/java.svg",
      name: "Java",
      id: 3,
    },
    {
      image: "/assets/home/section_three/html.svg",
      name: "Html",
      id: 4,
    },
    {
      image: "/assets/home/section_three/react.svg",
      name: "React",
      id: 5,
    },
    {
      image: "/assets/home/section_three/react.svg",
      name: "React",
      id: 6,
    },
  ],
};

const SectionThree = () => {
  const classes = useStyles();
  const router = useRouter();
  const [active, setActive] = useState(null);
  const setServiceItemInLocalStorage = (service) => {
    localStorage.setItem("currentServiceItem", JSON.stringify(service));
    router.push("/services");
  };

  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles.hero}>
          <h2 className={Styles.hero_title}>We do IT better</h2>
          <p className={Styles.hero_description}>
            Sapien sem lectus tempor cursus. Tortor et viverra augue ipsum,
            platea sem viverra.
          </p>
        </div>
        <ThemeProvider theme={theme}>
          <Timeline className={classes.root}>
            {servicesObject.items.map((item) => (
              <TimelineItem
                key={item.id}
                onClick={() => setServiceItemInLocalStorage(item)}
              >
                <TimelineSeparator>
                  {item.id <= 5 ? (
                    <TimelineDot
                      className={classes.timelineDotWhite}
                      style={
                        active === item.id
                          ? {
                              cursor: "pointer",
                              color: "white",
                              backgroundColor: "white",
                            }
                          : {
                              cursor: "pointer",
                              color: "rgba(253, 253, 253, 0.6)",
                              backgroundColor: "rgba(253, 253, 253, 0.6)",
                            }
                      }
                    />
                  ) : null}

                  {item.id < 5 ? (
                    <TimelineConnector
                      // className={classes.timelineConnector}
                      style={
                        active === item.id
                          ? {
                              cursor: "pointer",
                              color: "white",
                              backgroundColor: "white",
                            }
                          : {
                              cursor: "pointer",
                              color: "rgba(253, 253, 253, 0.6)",
                              backgroundColor: "rgba(253, 253, 253, 0.6)",
                            }
                      }
                    />
                  ) : null}
                </TimelineSeparator>
                <TimelineContent
                  onMouseOver={() => setActive(item.id)}
                  // className={classes.timelineContentWhite}
                  style={
                    active === item.id
                      ? {
                          cursor: "pointer",
                          color: "white",
                        }
                      : {
                          cursor: "pointer",
                          color: "rgba(253, 253, 253, 0.6)",
                        }
                  }
                >
                  {item.name}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ThemeProvider>
      </div>
      <div className={Styles.languages}>
        {languages.items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
