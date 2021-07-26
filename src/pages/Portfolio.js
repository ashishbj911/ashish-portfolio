import React, { useEffect } from "react";
import { useAppContext } from "../context";
import styled from "styled-components";

export const Portfolio = () => {
  const { categories, items, filterItems } = useAppContext();
  console.log(items);
  return (
    <Wrapper>
      <>
        <div className="container">
          <div className="section portfolio-section text-center">
            <h1 className="heading">Portfolio</h1>
            <p className="description">
              I have worked on a lot of projetcs in various technolgoies. Some
              of theme are listed below
            </p>
            <div className="tabs">
              {categories.map((category, index) => {
                return (
                  <button key={index} onClick={() => filterItems(category)}>
                    {category}
                  </button>
                );
              })}
            </div>
            <div className="content">
              {items.map((item) => {
                const { image, id } = item;
                return (
                  <article key={id}>
                    <img src={image} alt="portfolio" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .tabs {
    margin-top: 3rem;
  }
  .tabs > button {
    background: none;
    font-size: 1.2rem;
    border: 0;
    margin: 0 2rem;
    font-weight: 600;
    font-family: var(--main-font-family);
    text-transform:capitalize;
  }
  .content {
    display: grid;
    grid-gap: 50px;
    margin-top: 3rem;
  }
  .content > article {
    box-shadow: 0 10px 20px #d6d6d6;
    border-radius: 20px;
    overflow: hidden;
}
  .content > article img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 992px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
