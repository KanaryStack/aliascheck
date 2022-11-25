import useStyles from "./styles";
import { useTheme } from "next-themes";
import { Card, Typography, Box, Paper, TextField, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useEffect, useRef, useState } from "react";

// Social Media dummy datas
const socials = [
  {
    id: 1,
    img: "/assets/images/facebookimg.svg",
    title: "Facebook",
    subheader: "Avilable",
  },
  {
    id: 2,
    img: "/assets/images/twitterimg.svg",
    title: "Twitter",
    subheader: "Available",
  },
  {
    id: 3,
    img: "/assets/images/instagramimg.svg",
    title: "Instagram",
    subheader: "Available",
  },
  {
    id: 4,
    img: "/assets/images/snapchatimg.svg",
    title: "Snapchat",
    subheader: "Available",
  },
  {
    id: 5,
    img: "/assets/images/Tiktok.svg",
    title: "TikTok",
    subheader: "Available",
  },
];

/*
 * Extra paper contain for the shadow blurry background
 */
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: 74,
  width: 176,
  borderRadius: 10,
}));

/**
 * Custom Accordion styles
 */
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  background: "transparent",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    justifyContent: "center",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

/**
 * Displays search results and captures details
 * for generating suggested usernames
 * @params NULL
 * @returns React.FC
 */
const SearchResult: React.FC = () => {
  const [modeColor, setModeColor] = useState("");
  const classes = useStyles();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setModeColor(resolvedTheme === "light" ? "black" : "white");
  }, [resolvedTheme]);

  return (
    // This the main containr with a width of 100%
    <section className={classes.container}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            margin: 2,
            paddingTop: 2,
            textAlign: "center",
            fontSize: 20,
            lineHeight: 2,
          }}
        >
          Results
        </Typography>
        <Box
          className={classes.socialhandles}
          sx={{
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {socials.map((social) => (
            <Item elevation={12} key={social.id}>
              <Card sx={{ borderRadius: 2 }}>
                <CardHeader
                  sx={{ height: 74 }}
                  avatar={
                    <CardMedia
                      component="img"
                      alt="sociallogo"
                      image={social.img}
                    />
                  }
                  title={
                    <Typography variant="subtitle2" component="h2">
                      {social.title}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color={"#22BC22"}>
                      {social.subheader}
                    </Typography>
                  }
                />
              </Card>
            </Item>
          ))}
        </Box>

        <Accordion>
          <AccordionSummary
            sx={{
              color: modeColor,
            }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                marginTop: 5,
                marginLeft: 3,
                textAlign: "center",
                "& > span": {
                  fontWeight: "bold",
                },
                "& > span:hover": {
                  color: "#FAB535",
                },
              }}
            >
              More personalized options?{" "}
              <span className={classes.span}>See suggestion</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: modeColor,
            }}
          >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                "& .MuiTextField-root": {
                  mx: 1,
                  width: "20ch",
                  textAlign: "center",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  variant="outlined"
                  label="First Name"
                  placeholder="First Name"
                  type="text"
                />
                <TextField
                  variant="outlined"
                  label="last Name"
                  placeholder="last Name"
                  type="text"
                />
                <TextField
                  variant="outlined"
                  label="Favorite Color"
                  placeholder="Favorite Color"
                  type="text"
                />
                <TextField
                  variant="outlined"
                  label="Favorite Number"
                  placeholder="Favorite Number"
                  type="number"
                />
              </div>
              <div>
                <Button
                  // type="submit"
                  className={classes.button}
                  variant="contained"
                >
                  search
                </Button>
              </div>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Container>
    </section>
  );
};

export default SearchResult;
