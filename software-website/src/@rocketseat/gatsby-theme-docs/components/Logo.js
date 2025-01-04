import React from "react";
import styled from "styled-components";

const Name = styled.div`
  font-size: 21px;
  color: #353544;
  letter-spacing: 0.7px;
`;

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 15px;
  color: #6c6c80;
  padding-top: 5px;
`;

const StyledLogo = styled.div`
  &:hover {
    text-decoration: none;
  }
`;

export default function Logo(props) {
  return (
    <StyledLogo>
      <Name>Dylan Harness</Name>
      <Subtitle>Software Engineer</Subtitle>
    </StyledLogo>
  );
}
