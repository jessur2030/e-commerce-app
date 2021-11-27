import { ChevronLeftOutlined, ChevronRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 3.125rem; //50px;
  height: 3.125rem; //50px;
  background-color: #faf7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "0.625rem"}; //10px
  right: ${(props) => props.direction === "right" && "0.625rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: 1000ms ease-in-out;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  /* height: 80%; */
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem; //50px;
`;

const Title = styled.h1`
  font-size: 4.375rem; //70px
`;
const Description = styled.p`
  margin: 3.125rem 0; //50px 0px
  font-size: 1.25rem; //20px
  font-weight: 500;
  letter-spacing: 0.1875rem; //3px
`;
const Button = styled.button`
  padding: 0.625rem; //10px
  font-size: 1.25rem; //20px
  background-color: transparent;
  border: 2px solid #333;

  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #333;
    color: #fff;
    transition: 60ms ease-in-out;
  }
  /* border-radius: 3px; */
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = function (direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ChevronRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
