import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sedans",
    description:"Comfortable, practical cars ideal for families and commuting.",
    imgSrc:"/sedan.jpg",
  },
  {
    _id: uuid(),
    categoryName: "SUVs",
    description:
      "Spacious vehicles with versatility, perfect for both city driving and outdoor adventures.",
      imgSrc:"/suv.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Coupes",
    description:
      "Sleek, sporty two-door cars that emphasize style and performance, often with a more dynamic driving experience",
      imgSrc:"coupe.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Engine Components",
    description:
      "Includes the engine block, pistons, crankshaft, camshaft, and timing belt—key elements for the engine's performance and functionality.",
      imgSrc:"engine.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Suspension and Steering",
    description: "Parts like shocks, struts, control arms, and steering racks that ensure stability, comfort, and precise handling of the vehicle",
     imgSrc:"susandsteering.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Braking System",
    description:"Comprises parts such as brake pads, rotors, calipers, and brake fluid, crucial for safe and efficient stopping power.",
     imgSrc:"braking.png",
  },
];
