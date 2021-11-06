import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const Rolls = "https://i.imgur.com/UAhL4B8.png";
import SCREENS from "../../components/responsive";
import Image from "next/image";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
`}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
`}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    lg:leading-relaxed
`}
`;

const Description = styled.p`
  ${tw`
  text-xs
  lg:text-sm
  xl:text-lg
  sm:max-h-full
  overflow-hidden
  max-h-12
  text-gray-800
  `}
`;

const StandAloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -5em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -5em;
    top: -9em;
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>The Automotive Customization Shop</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
      </LeftContainer>
      <RightContainer>
        <StandAloneCar>
          <Image alt="Rolls Roycee" src={Rolls} width={708} height={553} />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
