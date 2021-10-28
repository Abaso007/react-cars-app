/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000, { message: "Monthly Price Cannot Be That High" })
  @Min(1500, { message: "Monthly Price Cannot Be That Low" })
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(1000, { message: "Daily Price Cannot Be That High" })
  @Min(10, { message: "Daily Price Cannot Be That Low" })
  dailyPrice: number;

  @Field((type) => Int)
  year: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailSrc: string;
}
