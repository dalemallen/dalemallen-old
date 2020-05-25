import React from "react";
// import logo from "./";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <>
      <Home />
      <Skills />
    </>
  );
};

export default App;
