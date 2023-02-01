import { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Switcher from "../Switcher";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useTheme, ThemeProvider } from "@mui/material/styles";

const drawerWidth = 150;
const DrawerComp = () => {
  const theme = useTheme();
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Drawer
          variant={theme.palette.mode === "dark" ? "permanent" : "temporary"}
          anchor="right"
          PaperProps={{
            elevation: 8,
            sx: {
              margin: "3.5rem .1rem",
              width: drawerWidth,
              backgroundColor: "#e2e0ef",
              color: "#031521",
              height: "85vh",
              alignItems: "left",
            },
          }}
          open={drawer}
          onClose={() => setDrawer(false)}
        >
          <Box>
            <IconButton>
              <Typography sx={{ color: "#031521" }}>Dark mode</Typography>
              <Switcher />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {[
              { text: "Home", icon: <HomeIcon /> },
              { text: "About Us", icon: <StarIcon /> },
              { text: "Services", icon: <MiscellaneousServicesIcon /> },
              { text: "Sign Up", icon: <ExitToAppIcon /> },
            ].map((item) => (
              <ListItem button key={item.text} sx={{ gap: "0.5rem" }}>
                <ListItemIcon sx={{ minWidth: "30px", color: "#031521" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    "&:hover": {
                      borderBottom: "2px solid #FAB535",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <IconButton
          sx={{
            marginLeft: "auto",
            color: "#FAB535",
          }}
          onClick={() => setDrawer(!drawer)}
          size={"small"}
        >
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </ThemeProvider>
    </>
  );
};

//https://dribbble.com/shots/19798757-Nulis-User-Menu-Detail

export default DrawerComp;
