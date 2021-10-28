import React from "react"
import "./App.css"
import { HomePage } from "./app/containers/HomePage"
import tw from "twin.macro"
import styled from "styled-components"

const AppContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
`}
`

function App() {
  return (
    <AppContainer className="App">
      <HomePage />
    </AppContainer>
  )
}

export default App
