import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Link, animateScroll as scroll } from "react-scroll";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  icons: {
    alignItems: "center",
  },
  logo: {
    height: "500px",
    alignItems: "center",
  },
  title: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const jobTitle = ["Software Engineer", "Designer", "Realtor"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const myTitles = () => {
    let totalTitles = jobTitle.length - 1;
    console.log(totalTitles);
    setCurrentTitle(currentTitle + 1);
    if (currentTitle === totalTitles) {
      setCurrentTitle(0);
    }
  };
  return (
    <Container justify="center" align="center" className={classes.root}>
      <img
        src={process.env.PUBLIC_URL + "/img/LogoBlack.png"}
        alt="logo"
        className={classes.logo}
      />
      <Grid item xs={12}>
        <Typography variant="h1" color="textPrimary">
          Dale Allen
        </Typography>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          {jobTitle[currentTitle]}{" "}
          <FlashOnIcon onClick={myTitles} className={classes.title} />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="Skills" smooth={true}>
          Skills
        </Link>
        <Link to="Projects" smooth={true}>
          Projects
        </Link>
      </Grid>
    </Container>
  );
};

export default Home;
