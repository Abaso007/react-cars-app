/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCars
// ====================================================

export interface GetCars_cars {
  __typename: "Car";
  name: string;
  mileage: string;
  gearType: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
  year: number;
  thumbnailSrc: string;
}

export interface GetCars {
  cars: GetCars_cars[];
}
