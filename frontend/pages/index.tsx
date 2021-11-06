import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import tw from "twin.macro";
import styled from "styled-components";
import { HomePage } from "../containers/HomePage";

const AppContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
`}
`;
const Home: NextPage = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
};

export default Home;
