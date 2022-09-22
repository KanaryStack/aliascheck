import useStyles from "./styles";
import {
  Toolbar,
  Button,
  Typography,
  Box,
} from "@mui/material";

interface Props {
  window?: () => Window;
}
const menuItems = ["Services", "FAQs"];

const index = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Toolbar className={classes.container}>
          <Typography variant="h1" className={classes.title} component="div">
            Aliascheck
          </Typography>
          <div className={classes.grow} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: "#031521", fontWeight: 700 }}>
                {item.toLowerCase()}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default index;
