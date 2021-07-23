import React from "react";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context";

export const Navbar = () => {
  const { openSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className="header container">
        <div className="logo">
          <Link to="/">ashish.</Link>
        </div>
        <div className="nav-links">
          {links.map((item) => {
            const { id, url, label } = item;
            return (
              <Link to={url} key={id}>
                {label}
              </Link>
            );
          })}
        </div>
        <div className="mobile-toggle">
          <button type="button" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  box-shadow: 0 -10px 20px var(--main-body-content-color);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }
  .logo > a {
    font-size: 2.5rem;
    font-family: "Pacifico", cursive;
  }
  .nav-links > a {
    display: inline-block;
    margin-left: 2rem;
  }
  .mobile-toggle button {
    background:var(--main-body-color);
    color:var(--main-body-light-color);
    border: 0;
    padding: 7px 12px;
    font-size: 1.5rem;
    line-height: 1.5rem;
    border-radius: 4px;
}
  @media(max-width:992px){
    .nav-links{
      display:none;
    }
  }
  @media (min-width: 992px) {
    .mobile-toggle {
      display: none;
    }
  }
`;
