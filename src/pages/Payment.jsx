import React from "react";
import styled from "styled-components";
import ImageCarousel from "../utils/ImageCarousel";
import { images } from "../constants/constants";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  ${
    "" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  ${"" /* background: no-repeat url("./img/bg.jpg"); */}
  background-color: #010116;
  @media only screen and (max-width: 768px) {
    height: 160vh;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1.5;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1030px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #f5f5f5;
  margin: auto 10%;
  background: #3530cf;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1030px) {
    font-size: 30px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 22px;
  text-align: justify;
  color: lightgray;
  margin: auto 10%;
`;

const Payment = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ImageCarousel images={images} />
        </Left>
        <Right>
          <Title>About CleanChain</Title>
          <Desc>
            Our project is a blockchain-powered platform that mobilizes
            communities for environmental cleanup campaigns, allowing users to
            create and join campaigns with detailed information. It promotes
            transparency, rewards, and plastic waste traceability, contributing
            to cleaner and more sustainable environments.
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};
export default Payment;
