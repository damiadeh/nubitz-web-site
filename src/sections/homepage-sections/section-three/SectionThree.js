import SectionText from "../../../components/section_text/SectionText";

import { Divider, makeStyles, ThemeProvider } from "@material-ui/core";
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
      id: 1
    },
    {
      image: "/assets/home/section_three/ruby.svg",
      name: "Ruby",
      id: 2
    },
    {
      image: "/assets/home/section_three/java.svg",
      name: "Java",
      id: 3
    },
    {
      image: "/assets/home/section_three/html.svg",
      name: "Html",
      id: 4
    },
    {
      image: "/assets/home/section_three/react.svg",
      name: "React",
      id: 5
    },
    {
      image: "/assets/home/section_three/react.svg",
      name: "React",
      id: 6
    },
    {
      image: "/assets/home/section_three/python.svg",
      name: "Python",
      id: 7
    },
    {
      image: "/assets/home/section_three/php.svg",
      name: "Php",
      id: 8
    },
    {
      image: "/assets/home/section_three/python.svg",
      name: "Python",
      id: 9
    },
  ],
};

const SectionThree = () => {
  const classes = useStyles();

  return (
    <div className={Styles.container}>
      <div>
        <SectionText
          textColor="white"
          secondary
          title="We do IT better"
          description="Sapien sem lectus tempor cursus. Tortor et viverra augue ipsum, platea sem viverra."
        />
        <ThemeProvider theme={theme}>
          <Timeline className={classes.root}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDotWhite} />
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContentWhite}>
                Web applications
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot} />
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContent}>
                Digital Marketing applications
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot} />
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContent}>
                Mobile applications
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContent}>
                Server applications
              </TimelineContent>
            </TimelineItem>
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
