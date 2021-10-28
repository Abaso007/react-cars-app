import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import SCREENS from "../../components/responsive"
import JeepImg from "../../../assets/images/jeep.png"

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pr-0
    bg-white
    `}
`
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 20em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
items-center
`}
`

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
    `}
`

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    mt-4
    `}
`
export default function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="Jeep" />
      </CarContainer>
      <InfoContainer>
        <Title>The Premier Private Car Club.</Title>
        <InfoText>
          Welcome to our car service. Whatever your needs may be, get in touch
          with us today for more details about our products and services. If you
          visit us in person, our business has discounts for active military
          personnel. Wheelchair accessible entrance available. We look forward
          to meeting you.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}
