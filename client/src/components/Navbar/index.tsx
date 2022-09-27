import useStyles from "./styles";
import { Toolbar, Button, Typography, Box } from "@mui/material";
import Switcher from "../Switcher";
interface Props {
  window?: () => Window;
}
const menuItems = ["Services", "FAQs"];

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
              display: { xs: "none", sm: "block" },
              flex: 0.5,
            }}
          >
            {menuItems.map((item) => (
              <Button
                // className={classes.btn}
                key={item}
                sx={{ fontWeight: 700 }}
              >
                {item.toLowerCase()}
              </Button>
            ))}
            <Button
              className={classes.button}
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Sign Up
            </Button>
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