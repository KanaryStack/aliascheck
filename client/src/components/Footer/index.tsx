import useStyles from "./styles";
import { Typography, Divider, IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Newsletter from "./Newsletter";
import Link from "next/link";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Box className={classes.footer}>
          <Box className={classes.first}>
            <h1>Aliascheck</h1>
            <Typography sx={{ fontFamily: "poppins" }}>
              We help you find unique usernames early so that you can claim
              them.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <IconButton
                sx={{ p: "20px", gap: "20px", color: "#404F65" }}
                aria-label="menu"
              >
                <GitHubIcon fontSize="small" />
                <TwitterIcon fontSize="small" />
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.second}>
            <h3 className={classes.subscribeHeader}>
              Subscribe to our newsletter
            </h3>
            <Box>
              <Newsletter />
            </Box>
          </Box>
          <Box className={classes.third}>
            <h3>Menu</h3>
            {["Services", "Signup", "Privacy"].map((menu, index) => (
              <Link key={index} href="/">
                <Typography
                  sx={{
                    lineHeight: 1.6,
                    fontFamily: "poppins",
                    fontSize: "1.15rem",
                  }}
                >
                  {menu}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box className={classes.fourth}>
            <h3>Policies</h3>
            {["Terms", "Cookies", "FAQs"].map((policy, index) => (
              <Link key={index} href="/">
                <Typography
                  sx={{
                    lineHeight: 1.6,
                    fontFamily: "poppins",
                    fontSize: "1.15rem",
                  }}
                >
                  {policy}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Divider />
        <Box>
          <Typography variant="h3" className={classes.footerText}>
            &copy;{new Date().getFullYear()} Aliascheck. All rights reserved.
          </Typography>
        </Box>
      </div>
    </>
  );
};
export default Footer;
