import type { specialityType } from "./types"

export const specialities = [
    { speciality: "Shawama", text: "Une option gourmande pour une pause rapide." },
    { speciality: "Brochette", text: "Decouvrez nos grillades preparees pour les amateurs de saleurs." },
    { speciality: "Desserts", text: "Terminez votre repas avec une touche sucree." },
]

export const Dessert: specialityType[] = [
    {category: "dessert", name: "Coupe glacée maison", description: "Trois boules au choix, coulis", price: "2 000 FCFA", img: "/citydiet_img/coupe3.jpg"},
    {category: "dessert", name: "Fondant au chocolat", description: "Coeur chocolate fondant, souvant servi avec glace vanille.", price: "2 200 FCFA", img: "/citydiet_img/sundaechoco.jpg"},
    {category: "dessert", name: "Glace artisanale", description: "Parfums variés selon disponibilité", price: "800 FCFA", img: "/citydiet_img/artisanale2.jpg"},
    {category: "dessert", name: "Pancakes", description: "Parfums chocolat, fraise, caramel", price: "5900 FCFA", img: "/citydiet_img/artisanale4.jpg"}
]

export const Shawarma: specialityType[] = [
    {category: "shawama", name: "Shawama poulet", description: "Mariné et grillé minute, sauce à l'ail.", price: "2 000 FCFA", img: "/citydiet_img/shawarmapoulet2.jpg"},
    {category: "shawama", name: "Shawama boeuf", description: "Epices maison, crudités fraiches.", price: "2 200 FCFA", img: "/citydiet_img/shawarmaviande1.jpg"},
    {category: "shawama", name: "Shawama mixte", description: "Poulet et bœuf, sauce au choix", price: "2 500 FCFA", img: "/citydiet_img/shawarmamixte.jpg"},
]

export const Grillade: specialityType[] = [
    {category: "grill", name: "Brochettes de boeuf", description: "Mariné et grillés au charbon.", price: "2 500 FCFA", img: "/citydiet_img/brochettes.jpg"},
    {category: "grill", name: "Poisson braisé", description: "Tilapia entier, épices locales.", price: "4 500 FCFA", img: "/citydiet_img/poissonbraise.jpg"},
    {category: "grill", name: "Poulet braisé", description: "Mariné aux épices camerounaises, sauce piquante", price: "4 000 FCFA", img: "/citydiet_img/pouletbraise.jpg"},
    {category: "grill", name: "Brochettes mixtes", description: "Bœuf, poulet et légumes grillés", price: "3 000 FCFA", img: "/citydiet_img/brochettesmixtes.jpg"}
]