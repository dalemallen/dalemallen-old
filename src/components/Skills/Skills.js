import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Left from "./Left";
import Right from "./Right";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const Skills = () => {
  const classes = useStyles();
  const [screen, setScreen] = useState(null);
  const [left, setLeft] = useState(6);
  const [right, setRight] = useState(6);
  return (
    <Grid item container className={classes.root} name="Skills">
      <Grid item container xs={12}>
        <Grid
          item
          container
          align="center"
          justify="center"
          xs={left}
          onMouseEnter={() => {
            setScreen("left");
            setLeft(6);
            setRight(6);
            console.log(screen);
          }}
        >
          <Left />
        </Grid>
        <Grid
          item
          container
          xs={right}
          onMouseEnter={() => {
            setScreen("right");
            setLeft(4);
            setRight(8);
            console.log(screen);
          }}
        >
          <Right />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
