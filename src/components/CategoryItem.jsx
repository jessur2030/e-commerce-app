import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 0.1875rem; //3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 1.25rem; //20px;
`;
const Button = styled.button`
  border: none;
  padding: 0.625rem; //10px;
  background-color: #fff;
  /* color: #333; */
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #fff;
    transition: 60ms ease-in-out;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
