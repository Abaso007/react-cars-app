import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const CarLogoImg = "https://i.imgur.com/jS3Mjpy.jpg";
import Image from "next/image";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
  flex
  items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
  text-xl
  md:text-2xl
  font-bold
  text-black
  m-1
  `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const ImageContainer = styled.div`
  ${tw`h-6 md:h-9`}
`;

export function Logo(props: ILogoProps) {
  const { color } = props;
  return (
    <LogoContainer>
      <ImageContainer>
        <Image
          alt="Infamous Motor Group"
          src={CarLogoImg}
          width={30}
          height={30}
        />
      </ImageContainer>
      <LogoText color={color || "dark"}>Infamous Motor Group</LogoText>
    </LogoContainer>
  );
}
