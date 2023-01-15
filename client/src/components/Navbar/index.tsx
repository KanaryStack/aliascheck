import useStyles from "./styles";
import { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Typography,
  Box,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Switcher from "./Switcher";
import DrawerComp from "./Drawer/Drawer";

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* <AppBar
        elevation={0}
        position="static"
        enableColorOnDark
        sx={{
          ".MuiToolbar-root": {
            backgroundColor: "#fff",
          },
        }}
      >
        <Toolbar variant="dense">
          <Typography variant="h1" className={classes.title}>
            Aliascheck
          </Typography>
          <Switcher />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="primary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Services" />
              </Tabs>
            </>
          )}
          <button className={classes.button}>Sign up</button>
        </Toolbar>
      </AppBar> */}
      {/* </div> */}
      <Toolbar className={classes.container}>
        <Typography variant="h1" className={classes.title} component="div">
          Aliascheck
        </Typography>

        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="primary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Home" />
              <Tab label="Services" />
              <Tab label="FAQs" />
            </Tabs>
            <button className={classes.button}>Sign up</button>
            <Switcher />
          </>
        )}
      </Toolbar>
    </>
  );
};
export default Navbar;
