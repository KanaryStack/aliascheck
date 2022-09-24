import useStyles from "./styles";
import { Paper, Typography, Box, Container } from "@mui/material";
import Link from "next/link";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Box bgcolor="primary" className={classes.footer}>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >
            <Link href="/">
              <Typography className={classes.text}>Aliascheck</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="caption">
              Copyright&copy; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default Footer;