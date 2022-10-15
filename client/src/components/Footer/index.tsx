import useStyles from "./styles";
import { Typography, Box, Container, Button, Grid, Input } from "@mui/material";
import Link from "next/link";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footer}>
        <Grid borderColor="#404F65" borderBottom={1}>
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
              <Box className={classes.newsLetter}>Newsletter</Box>
              <Box sx={{ diplay: "flex" }}>
                <Box>
                  <Input
                    type="email"
                    placeholder="johndoe@shuffle.dev"
                    className={classes.emailInput}
                  />
                  <Button variant="contained" className={classes.submitButton}>
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{}}>
          <Grid className={classes.content}>
            <Box>
              <Typography variant="caption" className={classes.copyright}>
                &copy; {new Date().getFullYear()} Flex. All rights reserved.
              </Typography>
            </Box>
            <Box className={classes.policies}>
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
