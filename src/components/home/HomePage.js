import React from "react";
import { MDBMask, MDBView } from "mdbreact";
import { Slide } from "@material-ui/core";
import { MDBAnimation } from "mdbreact";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBView src="images/nasa-Q1p7bh3SHj8-unsplash.jpg">
          <MDBMask
            overlay="black-strong"
            className="flex-center flex-column text-white text-center"
          >
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div>
                <MDBAnimation type="zoomInUp" duration="500ms">
                  <h1>HUBBLEDOUBLE</h1>
                  <p>Tools for Cyberspace</p>
                </MDBAnimation>
              </div>
            </Slide>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default HomePage;
