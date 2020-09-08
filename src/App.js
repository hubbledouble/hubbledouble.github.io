import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavHeader from "./components/common/NavHeader";
import Footer from "./components/common/Footer";
import ReadMe from "./components/libraries/ReadMe";
import mergePatchReadMe from "./components/libraries/MergePatch.md";
import processSynchronizationReadMe from "./components/libraries/ProcessSynchronization.md";

function App() {
  return (
    <>
      <NavHeader />
      <Route path="/" exact component={HomePage} />
      <Route
        path="/json-merge"
        component={() => <ReadMe readme={mergePatchReadMe} />}
      />
      <Route
        path="/thread-sync"
        component={() => <ReadMe readme={processSynchronizationReadMe} />}
      />

      <Footer />
    </>
  );
}

export default App;
