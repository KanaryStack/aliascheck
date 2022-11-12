import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Hidden, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const top_margin = 10,
  width = "75%",
  height = "90%",
  border = "3px dashed #666";
export default makeStyles((theme:Theme ) => ({

  container: {
    borderBottom: "1px solid black",
    position: "relative",
    width: "100%",
    transition: "all 0.2s linear",
    height: "52vh",
    margin: `${top_margin}px 0`,
    marginBottom: `${5 * top_margin}px`,

    [theme.breakpoints.down(1389)]:{
      height:'55vh',
    },
    [theme.breakpoints.down(949)]:{
      height:'65vh',
    }, 
    [theme.breakpoints.down(727)]:{
      height:'70vh',
    },  
    [theme.breakpoints.down(573)]:{
      height:'80vh',
    }, 
    [theme.breakpoints.down(458)]:{
      height:'85vh',
    }, 
    [theme.breakpoints.down(425)]:{
      height:'90vh',
    }, 
    [theme.breakpoints.down(365)]:{
      height:'95vh',
    }, 
    [theme.breakpoints.down(320)]:{
      height:'100vh',
    }, 
  },
  
  outerBox: {
    border,
    width,
    height,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  outerBox_content:{
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    paddingTop: "32px",
    paddingLeft: "195px",
    paddingRight: "195px",

    [theme.breakpoints.down(1465)]:{
      paddingLeft: "150px",
      paddingRight: "150px",
    },
    [theme.breakpoints.down(1389)]:{
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    [theme.breakpoints.down(1208)]:{
      paddingLeft: "75px",
      paddingRight: "75px",
    },
    [theme.breakpoints.down(1141)]:{
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    [theme.breakpoints.down(727)]:{
      paddingLeft: "40px",
      paddingRight: "40px",
    },
    [theme.breakpoints.down(649)]:{
      paddingTop: "1rem",
    }, 
    [theme.breakpoints.down(425)]:{
      paddingTop: "0.5rem",
    }, 
  },
  hero: {
    textAlign: "center",
    fontWeight: "normal",
    fontSize: "3.25rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",

    [theme.breakpoints.down(1208)]:{
      paddingTop: "1rem",
      paddingBottom: "1rem"
    },
    [theme.breakpoints.down(1141)]:{
      paddingTop: "1.5rem",
    },
    [theme.breakpoints.down(649)]:{
      paddingTop: "1rem",
    }, 
    [theme.breakpoints.down(365)]:{
      paddingTop: "0.15rem",
    }, 
  },
  hero_fun: {
    color: "#FAB535",
    margin: "0 2px",
    marginLeft: "4px",
  },
  hero_article: {
    fontSize: "1.4rem",
    p: 5,

    [theme.breakpoints.between( 728, 'md')]:{
      fontSize: "1.22rem",
    },
    [theme.breakpoints.down(642)]:{
      fontSize: "1.1rem",
      p: 0
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: "1.125rem",
      p: 0
    },
  },
  topBox: {
    border,
    borderTop: "none",
    width: "25%",
    height: "20px",
    position: "absolute",
    top: `calc(${top_margin}px + 18px)`,
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  leftBox: {
    backgroundColor: "white",
    border,
    borderBottom: "none",
    borderLeft: "none",
    width: "12.5%",
    height: "5.1%",
    position: "absolute",
    top: height,
    right: width,
  },
  rightBox1: {
    backgroundColor: "white",
    border,
    borderBottom: "none",
    borderRight: "none",
    width: "12.6%",
    height: "20.5%",
    position: "absolute",
    top: `calc(${height} - 15%)`,
    left: width,
  },
  rightBox2: {
    backgroundColor: "white",
    border,
    borderTop: "none",
    borderLeft: "none",
    width: "6.6%",
    height: "10.5%",
    position: "absolute",
    top: `calc(${height} - 15%)`,
    left: width,
  },
  bottom: {
    position: "absolute",
    top: "calc(100% - 80px)",
    left: "47%",
    transform: "translateX(-50%)",
  },
  topL: {
    position: "absolute",
    [theme.breakpoints.down('lg')]:{
      display: 'none',
    }
  },
  topR: {
    position: "absolute",
    right: "0",
    [theme.breakpoints.down('lg')]:{
      display: 'none',
    }
  },
}));
