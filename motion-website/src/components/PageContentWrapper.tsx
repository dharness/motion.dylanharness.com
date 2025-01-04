import styled from "styled-components/macro";
import { contentWidthStyle } from "../sharedStyles";

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${contentWidthStyle};
  max-width: 900px;
  margin: 0px auto 0px auto;
  &::before {
    content: " ";
    min-height: 65px;
  }
  &::after {
    content: " ";
    min-height: 100px;
  }
  p {
    font-family: "Prompt";
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 36px;
    letter-spacing: 0.02em;
    margin-top: 0px;
    margin-bottom: 35px;
  }
`;

export { PageContentWrapper };
