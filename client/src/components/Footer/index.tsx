import useStyles from "./styles";
import { Typography, Box, Button, Grid, Input, Divider } from "@mui/material";
import Link from "next/link";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footer}>
        <Grid
        // borderColor="#404F65"
        // borderBottom={0.1}
        >
          <Box className={classes.text}>
            <Box sx={{ flex: 0.5 }}>
              <Box className={classes.logoText}>Aliascheck</Box>
              <Box>
                <Box className={classes.listItems}>
                  <Link href="/services" color="inherit">
                    <Typography>Services</Typography>
                  </Link>
                  <Link href="/faqs" color="inherit">
                    <Typography>FAQs</Typography>
                  </Link>
                  <Link href="/signup" color="inherit">
                    <Typography>Sign up</Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Grid
              sx={{
                width: "36%",
                marginRight: "0.2rem",
              }}
            >
              <Box className={classes.inputHeader}>Newsletter</Box>
              <Box sx={{ diplay: "flex" }}>
                <Box>
                  <Input
                    type="email"
                    placeholder="johndoe@shuffle.dev"
                    className={classes.inputLabel}
                  />
                  <Button variant="contained" className={classes.submitButton}>
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Divider sx={{ color: "#404F65" }} />
        <Grid sx={{}}>
          <Grid className={classes.content}>
            <Box>
              <Typography variant="caption" className={classes.copyright}>
                &copy; {new Date().getFullYear()} Flex. All rights reserved.
              </Typography>
            </Box>
            <Box className={classes.links}>
              <Link href="/terms">
                <Typography>Terms</Typography>
              </Link>
              <Link href="/privacy">
                <Typography>Privacy</Typography>
              </Link>
              <Link href="/cookies">
                <Typography>Cookies</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
