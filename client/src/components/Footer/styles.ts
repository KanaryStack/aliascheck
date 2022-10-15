import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
footer: {
    width: "100%",
    backgroundColor: "#FAB535",
    marginTop: "calc(10% + 2rem)",
  },

text: {
    paddingLeft: "6rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },

logoText: {
  fontWeight: 900, 
  fontSize: "1.8rem", 
  color: "#09334F"
  },

listItems: {
    display: "flex", 
    justifyContent: "space-between",
    color: "#09334F",
    width: "50%",
    marginTop: "1rem",
  },

newsLetter: {
  fontWeight: 700, color: "#09334F"
},

emailInput: {
  width: "44%",
  padding: ".5rem 2rem",
  margin: ".1rem 0",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  color: "#09334F",
  borderRadius: "0.6rem",
  '&:hover': {
    focus: {
      borderBottom: "none"
     }
  }
  },

submitButton: {
    padding: "0.6rem 1.2rem",
    width: "max-content",
    textTransform: "capitalize",
    marginLeft: "2rem",
    color: "#F0FDF4",
    backgroundColor: "#09334F",
    borderRadius: "0.375rem",
    cursor: "pointer",
    transition: "background 1s, color 1s",
    '&:hover': {
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
    // fontWeight: "bold",
    fontSize: ".9rem",
    marginLeft: "6rem",
    color: "#09334F",
    paddimgTop: "2rem",
  },
policies : {
    display: "flex",
    justifyContent: "space-between",
    color: "#09334F",
    width: "12%",
    marginRight: "8rem",
}
})) 