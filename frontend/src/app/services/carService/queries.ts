import gql from "graphql-tag"

export const GET_ALL_QUERIES = gql`
  query GetCars {
    cars {
      name
      mileage
      gearType
      dailyPrice
      monthlyPrice
      gas
      year
      thumbnailSrc
    }
  }
`
