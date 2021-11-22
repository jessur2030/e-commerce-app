import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  /* background-color: teal; */
  background-color: rgb(207, 33, 40);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 14px;
  font-weight: 700;
`;

const Announcement = () => {
  return <Container> LIMITED TIME! 40% OFF HOLIDAY GIFTS</Container>;
};

export default Announcement;
