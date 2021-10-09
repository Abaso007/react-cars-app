import React, { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Car } from "../../components/car"
import { ICar } from "../../typings/car"
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { autoplayPlugin } from "@brainhubeu/react-carousel"

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

export default function TopCars() {
  const [current, setCurrent] = useState()

  const audiRS5: ICar = {
    name: "Audi RS5 SportBack",
    mileage: "0",
    thumbnailSrc: "https://i.imgur.com/6w9EYuP.webp",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
    year: 2022,
  }
  const bmwM8: ICar = {
    name: "BMW M8 Competition Gran Coupe",
    mileage: "0",
    thumbnailSrc: "https://i.imgur.com/cg12Spd.webp",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
    year: 2022,
  }
  const rollsRoyceGhost: ICar = {
    name: "Rolls Royce Ghost",
    mileage: "0",
    thumbnailSrc: "https://i.imgur.com/t6XBm9d.webp",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
    year: 2022,
  }
  return (
    <TopCarContainer>
      <Title>Explore Our Top Rentals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          plugins={[
            "infinite",
            "arrows",
            "autoplay",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
          slides={[
            <Car {...audiRS5} />,
            <Car {...bmwM8} />,
            <Car {...rollsRoyceGhost} />,
          ]}
        />
      </CarsContainer>
    </TopCarContainer>
  )
}
