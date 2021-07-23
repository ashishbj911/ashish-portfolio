import React from "react";
import styled from "styled-components";
import { tech } from "../utils/constants";

export const Technologies = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section technologies-section text-center">
          <h1 className="heading">Technologies Known</h1>
          <p className="description">
            Listed Below are the various technologies that I have worked/working
            <br></br> on so far in my career
          </p>
          <div className="tech-links">
            {tech.map((item) => {
              const { id, image, label } = item;
              return (
                <article key={id}>
                  <div className="tech-box">
                    <img src={image} alt="tech" />
                    <h4>{label}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .tech-links {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .tech-links > article {
    width: 50%;
    padding: 2rem;
  }
  .tech-box {
    padding: 2rem;
    box-shadow: 0 0 40px 0 rgb(94 92 154 / 12%);
    border-radius: 12px;
  }
  .tech-box > h4 {
    margin: 1rem 0 0;
    font-weight: 400;
  }
  @media (min-width: 992px) {
    .tech-links > article {
      width: 25%;
    }
  }
`;
