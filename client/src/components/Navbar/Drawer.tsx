import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const items = ["Home", "Services", "FAQs", "Sign up"];

const DrawerComp = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <List>
          {items.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon sx={{ color: "black" }}>
                <ListItemText>{item}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#031521", marginLeft: "auto" }}
        onClick={() => setDrawer(!drawer)}
      >
        {drawer === false ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
    </>
  );
};

export default DrawerComp;
