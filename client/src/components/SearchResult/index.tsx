import useStyles from "./styles";
import { Card, Typography, Box, Paper } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

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

const searchResult: React.FC = () => {
  const classes = useStyles();
  return (
    // This the main containr with a width of 100%
    <section className={classes.container}>
      <Container maxWidth="xl">
        <Typography
          sx={{ margin: 2, paddingTop: 2, textAlign: "center", fontSize: 20, lineHeight: 2 }}
        >
          Results
        </Typography>
        <Box className={classes.socialhandles}
          sx={{
            gap: 2.75,
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

        <Typography
          sx={{ marginTop: 5,  marginLeft: 3, textAlign: "center", fontWeight: "bold" }}
        >
          More personalized options?{" "}
          <span className={classes.span}>See suggestion</span>
        </Typography>
      </Container>
    </section>
  );
};

export default searchResult;
