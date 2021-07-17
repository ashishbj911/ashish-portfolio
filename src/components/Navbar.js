import React from "react";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
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
    padding:.5rem 0;
  }
  .logo > a {
    font-size:2.5rem;
    font-family:'Pacifico', cursive;
  }
  .nav-links > a {
    display: inline-block;
    margin-left: 2rem;
  }`
