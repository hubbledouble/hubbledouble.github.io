import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

const NavHeader = () => {
  const [state, setState] = useState({
    collapse: false,
    isWideEnough: false,
  });

  function onClick() {
    setState({ collapse: !state.collapse });
  }

  return (
    <MDBNavbar
      className="position-absolute"
      fixed="top"
      dark
      expand="md"
      transparent
    >
      <MDBNavbarBrand href="/">HubbleDouble.com</MDBNavbarBrand>
      {!state.isWideEnough && <MDBNavbarToggler onClick={onClick} />}
      <MDBCollapse isOpen={state.collapse} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/json-merge">JSON Merge</MDBNavLink>
          </MDBNavItem>
          {/* <MDBNavItem>
            <MDBNavLink to="/thread-sync">Thread Sync</MDBNavLink>
          </MDBNavItem> */}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};
export default NavHeader;
