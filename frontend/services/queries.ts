import gql from "graphql-tag";
import { apolloClient } from "../graphql/graphql";

export const GET_ALL_CARS = gql`
  query GetCars {
    cars {
      id
      name
      mileage
      gearType
      gas
      thumbnailSrc
      dailyPrice
      monthlyPrice
      year
    }
  }
`;

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query cars {
        cars {
          id
          name
          mileage
          gearType
          gas
          thumbnailSrc
          dailyPrice
          monthlyPrice
          year
        }
      }
    `,
  });

  return {
    props: {
      cars: data.cars,
    },
  };
}
