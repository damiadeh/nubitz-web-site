import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
      },
    },
  },
});

export default Theme;
