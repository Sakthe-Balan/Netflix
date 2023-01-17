import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />

        <div className="body flex column a-center jcenter">
          <div className="text flex column">
            <h1>Unlimited Movies Tv shows and more</h1>
            <h4>Watch anhywhere , Cancel Anytime</h4>
            <h6>
              Ready to Watch, enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email address" name="email" />
            <input type="password" placeholder="password" name="pssword" />
            <button>Get started</button>
          </div>
          <button>Login</button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`;
