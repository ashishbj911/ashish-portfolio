import React, { useEffect } from "react";
import user from "../images/user.jpg";
import bg from "../images/bg.jpg";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {
  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);
  return (
    <Wrapper>
      <div style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
        <div className="container">
          <div className="section hero-section text-center">
            <div className="user-img">
              <img src={user} alt="author" />
            </div>
            <div className="info">
              <h1>
                Ashish <span>Bhardwaj</span>
              </h1>
              <div className="typing-data">
                I'am a{" "}
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Graphic Designer",
                      "Wordpress Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-section * {
    color: var(--main-body-light-color);
  }
  .user-img {
    overflow: hidden;
    width: 200px;
    height: 200px;
    margin: -3rem auto 0;
    border-radius: 50%;
    border: 8px solid rgb(255 255 255 / 15%);
  }
  .user-img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info h1 {
    font-size: 3rem;
    font-weight: 800;
    margin: 1rem 0 0;
  }
  .info h1 span {
    color: var(--main-body-color);
  }
  .typing-data {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
  .typing-data .Typewriter {
    font-weight: 800;
    margin-left: 10px;
  }
`;
