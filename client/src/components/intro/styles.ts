import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Hidden, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

// const top_margin = 10,
//   width = "75%",
//   height = "90%",
//   border = ".1875rem dashed #666";
export default makeStyles((theme: Theme) => ({
  container: {
    // borderBottom: ".0001rem solid black",
    // position: "relative",
    // width: "100%",
    // transition: "all 0.2s linear",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10rem 0",
    marginBottom: "3rem",
    // height: "60vh",
    // margin: `${top_margin}px 0`,
    // marginBottom: `${5 * top_margin}px`,

    // [theme.breakpoints.down("xl")]:{
    //   height:'89vh',
    // },
    [theme.breakpoints.down("lg")]: {
      // height:'89vh',
    },
    [theme.breakpoints.down("md")]: {
      borderBottom: "none",
      // height:'90vh',
    },
    [theme.breakpoints.down("sm")]: {
      // height:'95vh',
    },
    [theme.breakpoints.down("xs")]: {
      // height:'100vh',
    },
  },
  heroContent: {
    maxWidth: "600px",
  },

  typing_effect: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginTop: "100px",

    "& h2:nth-child(1)": {
      color: "#355c7d",
      fontFamily: "'Fira Code', monospace",
      fontWeight: "800",
      fontSize: "20px",
      margin: "0 0 0 35%",
      textAlign: "left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "170px",
      animation: "type 2s steps(40,end) forwards",
    },

    //   "& h2:nth-child(2)": {
    //     opacity: "0",
    // fontFamily: "'Work Sans', sans-serif",
    // margin: "0 auto auto auto",
    // background: "linear-gradient(to right, #f8b195, #f67280, #c06c84)",
    // fontWeight: "800",
    // fontSize: "100px",
    // width: "430px",
    // -webkitBackgroundClip: "text",
    // -webkitTextFillColor: "transparent",
    // overflow: "hidden",
    // animation: "shring-animation 2.2s steps(40,end) 2s forwards, blink .5s step-end infinite alternate",
    //   },
  },

  //   @keyframes shring-animation {
  //   0% {
  //     backgroundPosition: "0 0",
  //     opacity: "0",
  //     width: "0",
  //   },
  //   1% {
  //     background-position: 0 0;
  //     opacity: "1",
  //     borderRight: "1px solid orange",
  //   },
  //   50% {
  //     backgroundPosition: "150px 0",
  //     opacity: "1",
  //     borderRight: "1px solid orange",
  //   },
  //   100% {
  //     backgroundPosition: "400px 0",
  //     opacity: "1",
  //     borderRight: "1px solid orange",
  //   },
  // },

  // outerBox: {
  //   border,
  //   width,
  //   height,
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  // },
  // outerBox_content: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyItems: "center",
  //   alignItems: "center",
  //   paddingTop: "2rem",
  //   paddingLeft: "12.1875rem",
  //   paddingRight: "12.1875rem",
  //   [theme.breakpoints.down(1465)]: {
  //     paddingLeft: "9.375rem",
  //     paddingRight: "9.375rem",
  //   },
  //   [theme.breakpoints.down(1389)]: {
  //     paddingLeft: "6.25rem",
  //     paddingRight: "6.25rem",
  //   },
  //   [theme.breakpoints.down(1208)]: {
  //     paddingLeft: "4.6875rem",
  //     paddingRight: "4.6875rem",
  //   },
  //   [theme.breakpoints.down(1141)]: {
  //     paddingLeft: "3.125rem",
  //     paddingRight: "3.125rem",
  //   },
  //   [theme.breakpoints.down(727)]: {
  //     paddingLeft: "1rem",
  //     paddingRight: "1rem",
  //   },
  //   [theme.breakpoints.down(649)]: {
  //     paddingTop: "1rem",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     paddingTop: "0.5rem",
  //   },
  // },
  hero: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "3rem",
    // paddingTop: "1.5rem",
    // paddingBottom: "1.5rem",
    // [theme.breakpoints.down("md")]: {
    //   paddingTop: ".5rem",
    //   paddingBottom: "1rem",
    //   fontSize: "1.5rem",
    // },
    // [theme.breakpoints.up("md")]: {
    //   fontSize: "2rem",
    //   paddingTop: ".5rem",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "3.25rem",
    // },
  },
  hero_fun: {
    color: "#FAB535",
    margin: "0 .125rem",
    marginLeft: ".5rem",
  },
  hero_article: {
    fontSize: "1.4rem",
    p: 5,

    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
      p: 0,
    },
    // [theme.breakpoints.between( 728, 'md')]:{
    //   fontSize: "1.22rem",
    // },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      p: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.05rem",
      p: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".95rem",
      p: 0,
    },
  },
  // topBox: {
  //   border,
  //   borderTop: "none",
  //   width: "25%",
  //   height: "1.25rem",
  //   position: "absolute",
  //   top: `calc(${top_margin}px + 1.125rem)`,
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  // leftBox: {
  //   backgroundColor: "white",
  //   border,
  //   borderBottom: "none",
  //   borderLeft: "none",
  //   width: "12.5%",
  //   height: "5.1%",
  //   position: "absolute",
  //   top: height,
  //   right: width,
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  // rightBox1: {
  //   backgroundColor: "white",
  //   border,
  //   borderBottom: "none",
  //   borderRight: "none",
  //   width: "12.6%",
  //   height: "20.5%",
  //   position: "absolute",
  //   top: `calc(${height} - 15%)`,
  //   left: width,
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  // rightBox2: {
  //   backgroundColor: "white",
  //   border,
  //   borderTop: "none",
  //   borderLeft: "none",
  //   width: "6.6%",
  //   height: "10.5%",
  //   position: "absolute",
  //   top: `calc(${height} - 15%)`,
  //   left: width,
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  bottom: {
    position: "absolute",
    top: "calc(100% - 5rem)",
    left: "47%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("lg")]: {
      width: "13rem",
      height: "4rem",
    },
    [theme.breakpoints.down("md")]: {
      top: "calc(100% - 2.95rem)",
      left: "50%",
      width: "5.5rem",
      height: ".1rem",
    },
  },
  topL: {
    position: "absolute",
    [theme.breakpoints.down("lg")]: {
      width: "10rem",
      height: "2.5rem",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  topR: {
    position: "absolute",
    right: "0",
    [theme.breakpoints.down("lg")]: {
      width: "10rem",
      height: "2.5rem",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
