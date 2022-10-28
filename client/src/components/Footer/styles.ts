import { makeStyles } from "@mui/styles";
// import { Theme } from "@mui/material";

export default makeStyles(() => ({
  footer: {
    width: "100%",
    backgroundColor: "#FAB535",
    // marginTop: "calc(10% + 2rem)",
  },

  text: {
    paddingLeft: "6rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },

  logoText: {
    fontWeight: 700,
    fontSize: "1.8rem",
    color: "#09334F",
  },

  listItems: {
    display: "flex",
    justifyContent: "space-between",
    color: "#09334F",
    width: "50%",
    marginTop: "1rem",
  },

  inputHeader: {
    fontWeight: 700,
    color: "#09334F",
  },

  inputLabel: {
    width: "44%",
    padding: ".2rem 1.5rem",
    margin: ".1rem 0",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    color: "#09334F",
    borderRadius: "0.6rem",
    "&:hover": {
      focus: {
        borderBottom: "none",
      },
    },
  },

  submitButton: {
    padding: "0.4rem 1.3rem",
    width: "max-content",
    textTransform: "capitalize",
    marginLeft: "2rem",
    color: "#F0FDF4",
    backgroundColor: "#09334F",
    borderRadius: "0.375rem",
    cursor: "pointer",
    transition: "background 1s, color 1s",
    "&:hover": {
      backgroundColor: "#09334F",
      color: "#F0FDF4",
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    paddingBottom: "2rem",
  },
  copyright: {
    fontSize: ".9rem",
    marginLeft: "6rem",
    color: "#09334F",
    paddimgTop: "2rem",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    color: "#09334F",
    width: "14%",
    marginRight: "8rem",
  },
}));
