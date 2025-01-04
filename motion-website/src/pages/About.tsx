import React from "react";
import { PageContentWrapper } from "../components/PageContentWrapper";
import profile_png from "../assets/profile.png";
import profile_webp from "../assets/profile.png?as=webp";
import styled from "styled-components";
import { EMAIL_ADDRESS, GAMES_WEBSITE } from "../utils";
import { EmailLink } from "../components/EmailLink";
import { MOBILE_CUTOFF } from "../sharedStyles";

const MediaSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  picture {
    max-width: 35%;
    min-width: 35%;
    overflow: clip;
    img {
      width: 100%;
      min-width: 100%;
      border-radius: 10px;
    }
  }

  @media (max-width: ${MOBILE_CUTOFF}) {
    flex-direction: column;
    margin-top: 30px;
    picture {
      margin: auto;
      max-width: 100%;
    }
  }
`;

const StyledP = styled.p`
  max-width: 700px;
  margin: auto;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  h5 {
    font-family: "Prompt";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    margin: 0px 0px 7px 0px;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    color: #32c3f0;
    :hover {
      color: #20a1c8;
    }
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    margin: auto;
    margin-top: 50px;
  }
`;

export function About() {
  return (
    <>
      <PageContentWrapper>
        <MediaSection>
          <picture>
            <source srcSet={profile_webp} type="image/webp" />
            <img src={profile_png} />
          </picture>
          <TextSection>
            <StyledP>
              <b>Dylan Harness</b> is a motion designer from Canada. He used to
              be a software engineer but has now devoted himself to animation. A
              decade of 90s TV has left him especially interested in
              advertising. He works in 2D and 3D with After Effects, C4D and
              Toon Boom. He lives with his wife and a beagle named Ketchup. In
              his spare time he likes to cook and make{" "}
              <a target="_blank" href={GAMES_WEBSITE}>
                games.
              </a>
            </StyledP>
            <h5>Work with me!</h5>
            <p>
              If you have a motion design project, want to work together, or
              just want to chat, send me email at{" "}
              <EmailLink>{EMAIL_ADDRESS}</EmailLink>
            </p>
          </TextSection>
        </MediaSection>
      </PageContentWrapper>
    </>
  );
}
