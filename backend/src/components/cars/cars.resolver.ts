import { Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars() {
    return "Hello and Welcome To Infamous Motor Group Automotive Customization Shop";
  }
}
