import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { MDBContainer } from "mdbreact";
import CodeBlock from "./CodeBlock";

class ReadMe extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null };
  }

  componentWillMount() {
    fetch(this.props.readme)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    const container = {
      backgroundColor: "#1C2331",
      color: "white",
    };
    return (
      <>
        <MDBContainer style={container} className="text-left" fluid>
          <br /> <br />
          <br />
          <br />
          <ReactMarkdown
            source={this.state.terms}
            renderers={{ code: CodeBlock }}
          />
          <br />
        </MDBContainer>
      </>
    );
  }
}

export default ReadMe;
