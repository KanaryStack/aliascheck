import useStyles from "./styles";
import { Paper, Typography, Box, Container } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const classes = useStyles();
  const faPropIcon = faGithub as IconProp;
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#fab535",
        }}
      >
        <Box bgcolor="primary">
          <Box>
            <Link href="/">
              <Typography className={classes.text}>Aliascheck</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 2,
              color: "#000",
            }}
          >
            <Link href="https://github.com/KanaryStack/aliascheck" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPropIcon} />
              </a>
            </Link>
            <Typography
              variant="caption"
              sx={{ fontWeight: "bold", marginLeft: "0.5rem" }}
            >
              Copyright&copy; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default Footer;
