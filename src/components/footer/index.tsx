import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Logo } from "../logo"

const FooterContainer = styled.div`
  min-height: 20em;
  background-color: #1d2124;
  ${tw`
flex
w-full
pt-4
md:pt-12
pb-1
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
`}
`

const AboutContainer = styled.div`
  ${tw`
flex
flex-col
mr-7
md:mr-12
`}
`

const AboutText = styled.div`
  ${tw`
text-white
text-sm
font-normal
max-w-xs
leading-5
mt-2
`};
`

const SectionContainer = styled.div`
  ${tw`
flex
flex-col
mr-3
md:mr-16
`}
`

const LinksList = styled.ul`
  ${tw`
mb-3
`}
  & > a {
    ${tw`
  text-sm
  text-white
  `}
  }
`

const ListItem = styled.li`
  ${tw`
text-sm
text-white
mb-3
`}
`

const HeaderTitle = styled.h3`
  ${tw`
text-2xl
font-extrabold
text-white
mb-3
`}
`

export default function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            IMG (Infamous Motor group) is a Automotive Customization Shop.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  )
}
