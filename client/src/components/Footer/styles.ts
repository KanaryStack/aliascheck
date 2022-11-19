
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
  root: {
    marginTop: "3.75rem",
    flexGrow: 1,
    backgroundColor: "#FAB535",
  },

  section: {
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))",
      // gridAutoRows: "auto",
      // gridGap: ".0625rem",
      margin: "0 3.2rem",
      maxWidth: "100%",
    },
  },

  headerText: {
    fontWeight: 900,
    color: "#09334F",
    textAlign: "center",
    fontSize: "1.1rem",
  },

  listItems: {
    fontFamily: "Poppins",
    color: "#09334F",
    listStyle: "none",
    cursor: "pointer",
    textAlign: "center",
    diplay: "flex",
    flexDirection: "column",
    fontSize: "1rem",
    padding: "0 2rem",
    [theme.breakpoints.up("lg")]: {
      // diplay: "flex", 
      // justifyContent: "space-between",
      // flexDirection: "row",
    },
  },

  inputItems: {
    "& > input": {
      fontFamily: "Poppins",
      outline: "0",
      border: "0",
      background: "#fff",
      borderRadius: "0.375rem",
      textAlign: "center",
      marginTop: ".6rem",
    },
    "& > input::placeholder": {
      fontSize: ".85rem",
      color: "gray",
    },
    [theme.breakpoints.down("xs")]: {
      "& > input": {
        padding: ".3rem .8rem",
        marginLeft: "1.5rem",
      },
    },
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      marginTop: 10,
      "& > input": {
        padding: ".3rem .6rem",
      },
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > input::placeholder": {
        fontSize: ".68rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > input": {
        padding: ".3rem .1rem",
      },
      "& > input::placeholder": {
        fontSize: ".9rem",
      },
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 2.5rem",
      "& > input": {
        padding: ".3rem 3.5rem",
      },
      "& > input::placeholder": {
        fontSize: "1rem",
      },
    },
  },

  submit: {
    cursor: "pointer",
    color: "#F0FDF4",
    textTransform: "capitalize",
    transition: "background 1s, color 1s",
    backgroundColor: "#09334F",
    borderRadius: "0.375rem",
    background: theme.palette.primary.main,
    border: 0,
    fontSize: ".75rem",
    marginTop: ".4688rem",
    padding: ".3rem .9rem",

    "&:hover": {
      transform: "scale(0.9)",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 4rem",
    },
  },
  footerText: {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    color: "#09334F",
    textAlign: "center",
  },
}));


// import { makeStyles } from "@mui/styles";
// import { Theme } from "@mui/material";

// export default makeStyles((theme: Theme) => ({
// root: {
//     flexGrow: 1,
//     marginTop: 10,
//     backgroundColor: "#FAB535",
//     borderTop: "solid .1875rem #FAB535 ",
//   },
// footerText: {
//     color: "#09334F",
//     lineHeight: "1.5",
//     margin: "1rem 2rem",
//     textAlign: "center",
//   },
// headerText: {
//     fontWeight: 700,
//     margin: "1rem 2rem",
//     fontSize: "1.2rem",
//     color: "#09334F",
//     textAlign: "center",
//   },
// listItems: {
//     display: "flex",
//     justifyContent: "space-around",
//     color: "#09334F",
//     listStyle: "none",
//     cursor: "pointer",
//     [theme.breakpoints.down("xs")]: {
//       gap: "1rem",
//       textAlign: "center",
//       margin: "0 3rem",
//       padding: "0 1.5rem"
//     },
//     [theme.breakpoints.up("md")]: {
//         fontSize: ".8125rem",
//     },
//     [theme.breakpoints.up("lg")]: {
//       fontSize: "1.0625rem",
//     },

//   },
// inputHeader: {
//     fontWeight: 700,
//     color: "#09334F",
//     fontSize: "1.375rem",
//     margin: "1rem 2rem",
//   },
// inputItems: {
//   display: "flex",
//   flexDirection: "row", 
//   alignItems: "center", 
//   "& > input": {
//     width: "60%",
//     padding: ".2rem .8rem",
//     outline: "0",
//     border: "0",
//     color: theme.palette.secondary.light,
//     borderRadius: "0.375rem",
//     margin: "0 2rem",
//     textAlign: "center",
//   },
//   "& > input::placeholder": {
//     color: "#0D0D0D",
//   },
//   [theme.breakpoints.up("md")]: {
//     "& > input": {
//       width: "70%",
//       margin: "0 .5rem",
//       fontSize: ".75rem",
//     },
//   },
//   [theme.breakpoints.up("lg")]: {
//     width: "100%",
//     "& > input": {
//       width: "90%",
//       padding: ".5rem .5rem",
//       fontSize: ".9rem",
//     },

//     "& > input::placeholder": {
//       fontSize: "1rem",
//     },
//   },
// },
// submit: {
//   cursor: "pointer",
//   color: "#F0FDF4",
//   padding: "0.6rem 1.2rem",
//   textTransform: "capitalize",
//   fontSize: "0.9rem",
//   transition: "background 1s, color 1s",
//   backgroundColor: "#09334F",
//   borderRadius: "0.375rem",
//   background: theme.palette.primary.main,
//   border: 0,
//   "&:hover": {
//     transform: "scale(0.9)",
//   },
//   [theme.breakpoints.down("xs")]: {
//     fontSize: ".625rem",
//     padding: "0.5rem 1rem",
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: ".3125rem",
//   },
//   [theme.breakpoints.up("md")]: {
//       padding: "0.3rem .5rem",
//       fontSize: ".625rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     padding: ".5rem 1rem",
//     fontWeight: 400,
//     fontSize: "0.9rem",
//   },
// },
//   copyright: {
//     fontSize: ".9rem",
//     color: "#09334F",
//   },
// }));
