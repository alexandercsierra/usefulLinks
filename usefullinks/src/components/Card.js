import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 30%
`;

const Card = () => {
  return (
    <CardDiv>
      <h3>Title</h3>
      <p>description</p>
      <p>tags</p>
    </CardDiv>
  );
};

export default Card;
