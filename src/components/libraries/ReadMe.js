import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { MDBContainer, MDBJumbotron, MDBCol } from "mdbreact";
import CodeBlock from "./CodeBlock";
import { Collapse, Paper } from "@material-ui/core";
import Spinner from "../common/Spinner";
import { Slide } from "@material-ui/core";
import { Jumbotron } from "react-bootstrap";
import { MDBMask, MDBView } from "mdbreact";
import { MDBAnimation } from "mdbreact";

class ReadMe extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null, loading: true };
  }

  componentWillMount() {
    fetch(this.props.readme)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text, loading: false });
      });
  }

  render() {
    const container = {
      color: "white",
      minHeight: "100vh",
    };

    return (
      <MDBContainer fluid className="elegant-color-dark">
        <MDBContainer>
          <br />
          <MDBAnimation type="slideInUp" duration="200ms">
            <MDBCol className="z-depth-5  elegant-color" style={container}>
              {this.state.loading ? (
                <Spinner />
              ) : (
                <div style={{ paddingTop: "20px" }}>
                  <ReactMarkdown
                    source={this.state.terms}
                    renderers={{ code: CodeBlock }}
                  />
                </div>
              )}
              <br />
            </MDBCol>
          </MDBAnimation>
        </MDBContainer>
        <br />
      </MDBContainer>
    );
  }
}

export default ReadMe;
