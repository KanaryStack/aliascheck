import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Switcher from "../Switcher";
const items = ["Home", "Services", "FAQs", "Sign up"];

const DrawerComp = () => {
  const [drawer, setDrawer] = useState(false);
  // const [drawerTheme, setDrawerTheme] = useState();

  return (
    <>
      <Drawer
        anchor="right"
        PaperProps={{
          elevation: 8,
          sx: {
            margin: "3.5rem .1rem",
            width: "70%",
            backgroundColor: "#e2e0efdb",
            color: "#031521",
            // d3d1dfdb
            height: "85vh",
            alignItems: "center",
          },
        }}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <List>
          {["Home", "Services", "FAQs", "Signup"].map((text, index) => (
            <ListItem button key={text} sx={{ gap: "0.5rem" }}>
              <ListItemIcon sx={{ minWidth: "30px", color: "#031521" }}>
                <AppsIcon sx={{ fontSize: "small" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
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
      >
        {drawer === false ? (
          <MenuIcon sx={{ fontSize: "2rem" }} />
        ) : (
          <CloseIcon sx={{ fontSize: "2rem" }} />
        )}
      </IconButton>
      {/* <Switcher /> */}
    </>
  );
};

export default DrawerComp;
