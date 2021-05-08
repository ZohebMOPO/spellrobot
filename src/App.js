import React, { Fragment } from "react";
import Head from "./components/Head";
import Buttons from "./components/Buttons";
import Music from "./components/Music";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Head />
      <Buttons />
      <Music />
    </Fragment>
  );
}

export default App;
