import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Car } from "../../components/car"
import { ICar } from "../../typings/car"

const TopCarContainer = styled.div`
  ${tw`
max-w-screen-lg
w-full
flex
flex-col
items-center
justify-center
pr-4
pl-4
md:pl-0
md:pr-0
mb-10
`}
`
const Title = styled.h2`
  ${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`}
`

const CarsContainer = styled.div`
  ${tw`
w-full
flex
flex-wrap
justify-center
mt-7
md:mt-10
`}
`

function TopCars() {
  const testCar: ICar = {
    name: "Audi",
    mileage: "10k",
    thumbnailSrc: "link",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  }
  return (
    <TopCarContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Car {...testCar} />
      </CarsContainer>
    </TopCarContainer>
  )
}

export default TopCars
