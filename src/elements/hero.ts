import type { heroType } from "./types";

// BLOC
export const hero:heroType = {
    restaurantName: 'City Diet',
    mark: 'Restaurant',
    services: ["Bar", "Self-service", "Catering"],
    slogan: "Des repas chauds chaque jour, dans un cadre convivial.",
    servBtnText: "Découvrir",
    contactBtnText: "Nous contacter", 
    image: "/photos/pict.jpg"
}

// INDIVIDUAL
export const restaurantName:string = 'City Diet';
export const mark:string = 'Restaurant';
export const services:string[] = ["Bar", "Self-service", "Catering"];
export const slogan:string = "Des repas chauds chaque jour, dans un cadre convivial.";
export const servBtnText:string = "Découvrez nos services";
export const contactBtnText:string = "Nous contacter";
export const image:string = "/photos/pict.jpg";