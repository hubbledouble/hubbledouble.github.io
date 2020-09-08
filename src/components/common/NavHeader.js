import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
} from "mdbreact";
import { WiMoonWaningCrescent5, WiMoonWaxingCrescent1 } from "react-icons/wi";

const NavHeader = () => {
  const [state, setState] = useState({
    collapse: false,
    isWideEnough: false,
  });

  function onClick() {
    setState({ collapse: !state.collapse });
  }

  return (
    <div>
      <MDBContainer style={{ backgroundColor: "black" }} fluid>
        <MDBContainer>
          <MDBNavbar color="black" dark expand="md">
            <MDBNavbarBrand href="/">HubbleDouble.com</MDBNavbarBrand>
            {!state.isWideEnough && <MDBNavbarToggler onClick={onClick} />}
            <MDBCollapse isOpen={state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/json-merge">
                    <WiMoonWaningCrescent5 /> merge & patch{" "}
                    <WiMoonWaxingCrescent1 />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/thread-sync">
                    <WiMoonWaningCrescent5 />
                    process synchronization <WiMoonWaxingCrescent1 />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
};
export default NavHeader;
