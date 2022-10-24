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
      <Box sx={{ display: "flex", marginBottom: "0.5rem" }}>
        <Box className={classes.container}>
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
              <Link href="/signup">
                <button className={classes.button}>Sign up</button>
              </Link>
            </Box>
          </Box>
          {/* <Box>
            <Switcher />
          </Box> */}
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
