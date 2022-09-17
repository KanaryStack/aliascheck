import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 
  container: {
    boxSizing: "border-box",
    position: "relative", 
    transition: "all 0.2s linear",
  },
  aligned: {
    maxWidth: "1200px",
    marginLeft: "auto", 
    marginRight: "auto",
  },
  title: {
    fontWeight: "normal",
    fontSize: "2rem",
    display: "flex", 
    justifyContent: "center",  
    alignItems: "center",
    padding: "0.5rem",
    backgroundColor: "#09334F",
    color: "#fff",

    [theme.breakpoints.up('md')]: {
      display: "inline-block",
      backgroundColor: "inherit",
      color: "#000", 
      fontWeight: "bold",
      margin: "3rem 1.2rem 0",
    },

    [theme.breakpoints.up('lg')]: {
      marginLeft: "3rem",
    },
  },
  headTitle: {
    margin: "1.5rem 1rem",
    padding: "1.8rem 0.5rem",
    borderRadius: "0.6rem",
    backgroundColor: "#EA9C0C",
    diplay: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: "300px",

    [theme.breakpoints.up('xs')]: {
      padding: "2rem 1.1rem",
      margin: "2.5rem 1.5rem",
      height: "350px",
    },

    [theme.breakpoints.up("sm")]: {
      content: 'Screen size = sm',
      height: "420px",
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: "#fff",
      height: "auto",
      position: "relative",
      overflow: "visible",
      margin: "0 2rem",

      paddingLeft: "0",  
    },

    [theme.breakpoints.up('lg')]: {
      margin: "0 3rem",
    },
  },
  subtitle: {
    fontWeight: "normal",
    fontSize: "1.4rem",
    textAlign: "center",
    lineHeight: "1.4",

    [theme.breakpoints.up('xs')]: {
      fontSize: "1.6rem",
    },

    [theme.breakpoints.up("sm")]: {
      content: 'Screen size = sm',
      fontSize: "1.9rem",
    },

    [theme.breakpoints.up('md')]: {
      fontSize: "1.8rem",
      width: "60%",
      textAlign: "left",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5rem",
    },

  },
  span: {
    padding: "0",
    margin: "0",
    backgroundColor: "#EA9C0C",

    [theme.breakpoints.up('md')]: {
      backgroundColor: "#EA9C0C",
      display: "inline-block",
      margin: "1rem 0 0.25rem",
      whiteSpace: "nowrap",
      textAlign: "left",
      minWidth: "max-content",
      fontWeight: "bold",
      padding: "0.2rem 0.5rem",
    },
  },
  image: {
    transform: "scale(0.45) translateY(-17rem)",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up('xs')]: {
      transform: "scale(0.45) translateY(-17rem)",
    },

    [theme.breakpoints.up("sm")]: {
      content: 'Screen size = sm',
      transform: "scale(0.45) translateY(-22rem)",
    },

    [theme.breakpoints.up('md')]: {
      transform: "scale(1.1) translateY(0)",
      position: "absolute",
      top: "-2rem",
      left: "65%",
    },
  },
  description: {
    fontSize: "1rem",
    margin: "0rem 1rem",
    textAlign: "center",

    [theme.breakpoints.up('xs')]: {
      fontSize: "1.2rem",
    },

    [theme.breakpoints.up("sm")]: {
      content: 'Screen size = sm',
      margin: "0 1.5rem",
      fontSize: "1.4rem",
    },

    [theme.breakpoints.up('md')]: {
      textAlign: "left",
      width: "55%",
      fontSize: "1.3rem",
      margin: "0 2rem",
    },

    [theme.breakpoints.up('lg')]: {
      margin: "0 3rem",
    },
  },
  comingsoon: {
    color: "#031521",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "2rem auto 3rem",

    [theme.breakpoints.up("sm")]: {
      content: 'Screen size = sm',
      margin: "2.5rem auto 3.5rem",
    },

    [theme.breakpoints.up('md')]: {
      textAlign: "left",
      marginLeft: "2rem",
      marginBottom: "7rem",
      display: "inline-block",
    },

    [theme.breakpoints.up('lg')]: {
      marginLeft: "3rem",
    },
  },
  top: {
    display: "flex",
    alignItems: "flex-start",
    position: "absolute",
    top: "0",
    left: "40%",
  },
  bottom: {
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    top: "calc(100% - 100px)",
    left: "20%",
  },
}));