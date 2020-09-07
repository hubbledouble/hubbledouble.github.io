import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavHeader from "./components/common/NavHeader";
import Footer from "./components/common/Footer";
import ReadMe from "./components/libraries/ReadMe";
import jsonMergeReadMe from "./components/libraries/JsonMerge.md";

function App() {
  return (
    <>
      <NavHeader />
      <Route path="/" exact component={HomePage} />
      <Route
        path="/json-merge"
        component={() => <ReadMe readme={jsonMergeReadMe} />}
      />
      <Route
        path="/thread-sync"
        component={() => <ReadMe readme={jsonMergeReadMe} />}
      />
      <Footer />
    </>
  );
}

export default App;
