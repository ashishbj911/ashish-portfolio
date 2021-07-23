import React from "react";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import { useAppContext } from "../context";

export const Sidebar = () => {
  const {closeSidebar,sidebar} = useAppContext()
  return (
    <Wrapper>
      <div className={sidebar ? "sidebar sidebar-active" : "sidebar"}>
      <button className="close-sidebar" onClick={closeSidebar}><FaTimes/></button>
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

const Wrapper = styled.div`
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:var(--main-body-light-color);
    padding: 20px;
    transform: translate(-100%);
    transition:all .5s ease;
}
.sidebar-active{
    transform: translate(0);
    transition:all .5s ease;
}
.close-sidebar {
    position: absolute;
    top: 0;
    right: 0;
    border:0;
    background:var(--main-body-color);
    color:var(--main-body-light-color);
    padding: 6px 10px;
    font-size: 1.2rem;
    line-height: 1.2rem;
}
.nav-links {
    margin-top: 2rem;
}
.nav-links > a {
    display: block;
    padding: 15px 0;
}
.nav-links > a + a {
    border-top:1px dashed var(--main-border-color);
}
@media(min-width:992px){
    .sidebar {
        display: none;
    }
}
`;
