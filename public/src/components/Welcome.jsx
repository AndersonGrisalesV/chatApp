import React, { useEffect, useState } from "react";

import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import Robot from "../assets/robot.gif";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function getUserName() {
      setUserName(
        await JSON.parse(localStorage.getItem("chat-app-user")).username
      );
    }
    getUserName();
  }, []);
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start Messaging</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;

export default Welcome;
