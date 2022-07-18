import { makeStyles } from "@mui/styles";

const EM: number = 1.5;
const LINES_TO_SHOW: number = 4;

export const useStyles = makeStyles({
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    position: "relative",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  description: {
    display: "-webkit-box",
    textAlign: "justify",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": `${LINES_TO_SHOW}`,
    "-webkit-box-orient": "vertical",
    lineHeight: `${EM}em`,
    height: `${LINES_TO_SHOW * EM}em`,
  },
});
