import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBarBtn,
  SideBarBtnLink,
} from "./SidebarElements";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer onClick={toggle} isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle}></CloseIcon>
      </Icon>

      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="/discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="/services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="/signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBarBtn>
          <SideBarBtnLink to="/signin">Sign In</SideBarBtnLink>
        </SideBarBtn>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
