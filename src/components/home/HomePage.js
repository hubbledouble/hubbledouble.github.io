import React from "react";
import { MDBMask, MDBView } from "mdbreact";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBView src="images/nasa-Q1p7bh3SHj8-unsplash.jpg">
          <MDBMask
            overlay="black-strong"
            className="flex-center flex-column text-white text-center"
          >
            <h1>HUBBLEDOUBLE</h1>
            <p>Tools for Cyberspace</p>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default HomePage;
