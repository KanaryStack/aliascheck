import useStyles from "./styles";
import { Toolbar, Button, Typography, Box } from "@mui/material";
import Switcher from "../Switcher";
import Link from "next/link";

interface Props {
  window?: () => Window;
}

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Toolbar className={classes.container}>
          <Box sx={{ display: "flex", flex: 2 }}>
            <Typography variant="h1" className={classes.title} component="div">
              Aliascheck
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 0.5,
            }}
          >
            <Box className={classes.menuItems} sx={{}}>
              <Link href="/services">
                <Typography className={classes.items}>Services</Typography>
              </Link>
              <Link href="/faqs">
                <Typography className={classes.items}>FAQs</Typography>
              </Link>
              <Button className={classes.button} variant="contained">
                Sign Up
              </Button>
            </Box>
          </Box>
          <Box>
            <Switcher />
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};
export default Navbar;
