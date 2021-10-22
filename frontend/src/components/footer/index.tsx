import { faMap, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Logo } from "../logo"

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap 
    justify-center
  `};
`

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`

const AboutContainer = styled.div`
  ${tw`
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    flex 
    justify-center
  `};
`

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    flex 
    justify-center
  `};
`

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
    justify-center
  `};
`

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
    justify-center
  `};
`

const ListItem = styled.ul`
  ${tw`
    mb-3
    flex 
    justify-center
  `};

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-200
      flex 
      justify-center
    `};
  }
`

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `};
`

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
    flex 
    justify-center
    `};
`

export default function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            <SectionContainer>
              <ListItem>
                <p>Mon: 9:00 AM – 6:00 PM</p>
              </ListItem>
              <ListItem>
                <p>Tue: 9:00 AM – 6:00 PM</p>
              </ListItem>
              <ListItem>
                <p>Wed: 9:00 AM – 6:00 PM</p>
              </ListItem>
              <ListItem>
                <p>Thu: 9:00 AM – 6:00 PM</p>
              </ListItem>
              <ListItem>
                <p>Fri: 9:00 AM – 6:00 PM</p>
              </ListItem>
              <ListItem>
                <p>Sat: 9:00 AM – 6:00 PM</p>
              </ListItem>
              <ListItem>
                <p>Sun: 9:00 AM – 6:00 AM</p>
              </ListItem>
            </SectionContainer>
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+1 (714) 747-2446</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Address</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faMap} />
            </RedIcon>
            <SmallText>1026 Fuller St, Santa Ana, CA 92701</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Infamous Motor Group. All
          rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  )
}
