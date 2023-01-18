import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/Firebase";
import {  useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate=useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setformValues] = useState({
    Email: "",
    Password: "",
  });
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (CurrentUser) => {
    if (CurrentUser) navigate("/");
  });
  return (
    <Container showPassword={showPassword}>
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
            <input
              type="email"
              placeholder="Email address"
              name="email"
              // value={formValues.Email}
              onChange={(e) =>
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
            {showPassword && (
              <input
                type="password"
                placeholder="password"
                name="password"
                // value={formValues.Password}
                onChange={(e) =>
                  setformValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            )}

            {!showPassword && (
              <button onClick={() => setshowPassword(true)}>Get started</button>
            )}
            {/* <input type="email"></input> */}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
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
    .body {
    gap:1rem;
    .text{
      gap:1rem;
      text-align:center;
      font-size:2rem;
      h1{
        padding:0 25rem;
      }
    }
    .form{
      display:grid;
     grid-template-columns:${({ showPassword }) =>
       showPassword ? "1fr 1fr" : "2fr 1fr"};
      width:60%;
      input{
        color:black;
        border:none;
        padding:1.5rem;
        font-size:1.2rem;
        border:1px solid black;
        &:focus{
          outline:none;

      }
      // z-index:1000;

      }
      button{
        padding:0.5rem 1rem;
        background-color:#e50914;
        border:none;
        cursor:pointer;
        color:white;
       
        font-weight:bolder;
        font-size:1.05rem;
      }
    }
    button{
      padding:0.5rem 1rem;
        background-color:#e50914;
        border:none;
        cursor:pointer;
        color:white;
        border-radius:0.2 rem;
        font-weight:bolder;
        font-size:1.05rem;

    }
  }
`;
