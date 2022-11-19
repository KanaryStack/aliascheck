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
  // AppsIcon,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Switcher from "../Switcher";
const items = ["Home", "Services", "FAQs", "Sign up"];

const DrawerComp = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        PaperProps={{
          elevation: 8,
          sx: {
            margin: "3.5rem 10rem",
            width: "240",
            backgroundColor: "#d3d1dfdb",
            color: "#031521",
            height: "55vh",
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
        sx={{ marginLeft: "auto" }}
        onClick={() => setDrawer(!drawer)}
      >
        {drawer === false ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
      {/* <Switcher /> */}
    </>
  );
};

export default DrawerComp;
