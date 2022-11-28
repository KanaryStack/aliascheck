import useStyles from "./styles";
import { Typography, Grid, Divider } from "@mui/material";
import Newsletter from "./Newsletter";
// import Link from "next/link";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root}>
        <Grid spacing={3} container>
          <Grid item xs={6} sm={4} className={classes.section}>
            <Typography className={classes.headerText}>Aliascheck</Typography>
            <ul className={classes.listItems}>
              <li>Services</li>
              <li>FAQs</li>
              <li>Signup</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} className={classes.section}>
            <Typography className={classes.headerText}>Newsletters</Typography>
            <Newsletter />
          </Grid>
          <Grid item xs={6} sm={4} className={classes.section}>
            <Typography className={classes.headerText}>Policies</Typography>
            <ul className={classes.listItems}>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.section}
            sx={{ marginBottom: "1.25rem" }}
          >
            <Typography className={classes.footerText}>
              &copy;{new Date().getFullYear()} Aliascheck. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
