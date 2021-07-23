import React from "react";
import styled from "styled-components";
import { socialLinks } from "../utils/constants";

export const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section contact-section text-center">
          <h1 className="heading">Contact</h1>
          <form action="https://formspree.io/f/mqkwddvz"
  method="POST">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="_replyto" placeholder="Email" />
            <textarea placeholder="Message" name="message" />
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
          <div className="social-links">
            {socialLinks.map((item) => {
              const { id, url, icon } = item;
              return (
                <a href={url} key={id} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  form {
    margin: auto;
  }

  form > input,
  form > textarea {
    width: 100%;
    display: block;
    padding: 1rem;
    margin-bottom: 1.5rem;
    font-family: var(--main-font-family);
    border: 1px solid var(--main-border-color);
  }

  form > textarea {
    min-height: 150px;
  }
  .social-links > a {
    font-size: 2.5rem;
    margin: 0 1rem;
    position: relative;
    z-index: 9;
  }
  .social-links > a:nth-child(4n + 1) {
    color: #2da638;
  }
  .social-links > a:nth-child(4n + 2) {
    color: #008cf5;
  }
  .social-links > a:nth-child(4n + 3) {
    color: #db2d52;
  }
  .social-links > a:nth-child(4n + 4) {
    color: #1277b5;
  }
  .social-links {
    position: relative;
    margin-top: 3rem;
  }
  @media (min-width: 992px) {
    .container {
      max-width: 50vw;
    }
    .social-links:before {
    content: "";
    position: absolute;
    width: 100%;
    background:var(--main-border-color);
    height: 2px;
    left: 0;
    right: 0;
    top: 20px;
  }

  .social-links:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    background:var(--main-body-light-color);
    left: 0;
    right: 0;
    margin: auto;
  }
  }
`;
