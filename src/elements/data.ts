import type {
    albumType,
    heroType,
    presentationType,
    serviceType,
    specialityType,
} from "./types";

// Nom de l'établissement affiché dans l'en-tête et le pied de page.
export const restaurantName: string = "City Diet";
// Type d'établissement affiché dans la section d'accueil.
export const mark: string = "Restaurant";
// Liste des services affichée dans la section d'accueil.
export const services: string[] = ["Bar", "Self-service", "Catering"];
// Phrase d'accroche principale de la page d'accueil.
export const slogan: string =
    "Des repas chauds chaque jour, dans un cadre convivial.";
// Libellé du bouton qui mène à la section des services.
export const servBtnText: string = "Découvrez nos services";
// Libellé du bouton qui mène à la section de contact.
export const contactBtnText: string = "Nous contacter";
// Chemin de l'image principale de la page d'accueil.
export const image: string = "/photos/pict.jpg";

// Données de la section d'accueil sous forme d'objet regroupé.
export const hero: heroType = {
    restaurantName,
    mark,
    services,
    slogan,
    servBtnText,
    contactBtnText,
    image,
};

// Titre de la section de présentation.
export const welcome: string = "Bienvenue chez City Diet";
// Premier paragraphe de présentation de l'établissement.
export const presentation1: string =
    "CITY DIET vous accueille dans un cadre agréable et convivial pour vos repas, vos moments de détente et vos événements";
// Second paragraphe de présentation de l'établissement.
export const presentation2: string =
    "Que vous soyez seul, en famille, entre amis ou en groupe, découvrez une offre variée allant du petit-déjeuner au dîner, avec également des services de restauration à emporter et de traiteur.";

// Données de présentation sous forme d'objet regroupé.
export const presentation: presentationType = {
    welcome,
    presentation1,
    presentation2,
};

// Titre de la section de localisation.
export const title: string = "Nous rendre visite.";
// Chemin de l'image de localisation ou de la carte.
export const map: string = "/citydiet_img/map1.jpg";
// Adresse détaillée de l'établissement.
export const adress: string = "Descente Lycée de Biyem-Assi";
// Adresse affichée dans la section de contact.
export const adress2: string = "Descente Lycée de Biyem-Assi, Yaoundé.";
// Ville et pays affichés dans le pied de page.
export const town: string = "Yaoundé, Cameroun";
// Numéro WhatsApp au format international, sans signe « + » ni espaces.
export const phone: string = "237657860713";
// Numéro de téléphone affiché aux visiteurs.
export const phone2: string = "+237 6 57 86 07 13 / 6 77 46 98 72";
// Adresse e-mail de contact.
export const email: string = "citydiet@gmail.com";
// Heure d'ouverture utilisée dans les informations de localisation.
export const schedules: string = "À partir de 9 h 00";
// Texte descriptif des horaires et du délai de réponse.
export const text: string =
    "Ouvert du lundi au dimanche à partir de 9 h. Réponse de confirmation sous 2 heures.";
// Numéro WhatsApp de remplacement ou à compléter si nécessaire.
export const whatsApp: string = "6 XX XX XX XX";

// Coordonnées et horaires regroupés pour la section de localisation.
export const localisation = {
    title,
    map,
    adress: "Yaoundé, Biyem-Assi",
    phone: "+237 6 57 86 07 13 / 6 77 46 98 72",
    email,
    schedules: "Ouvert 7j/7, de 9h00 à 23h00",
};

// Texte de l'appel à l'action invitant à réserver une table.
export const actionCall = {
    title: "Prêt à vivre une expérience culinaire unique ?",
    text: "« Réservez votre table dès aujourd'hui et laissez-nous transformer votre repas en un moment inoubliable. »",
};

// Catalogue complet des services proposés par l'établissement.
export const ourServices: serviceType[] = [
    {
        service: "Restaurant",
        explanation: "Repas sur place dans un cadre agréable et convivial",
        img: "/citydiet_img/restaurant.jpg",
    },
    {
        service: "Self-service",
        explanation: "Choisissez vos plats selon vos envies.",
        img: "/citydiet_img/servicerapide.jpg",
    },
    {
        service: "Breakfast",
        explanation: "Commencez votre journée autour d'un petit-déjeuner.",
        img: "/citydiet_img/breakfast1.jpg",
    },
    {
        service: "Piano Bar",
        explanation: "Une ambiance musicale pour accompagner vos soirées.",
        img: "/citydiet_img/pianobar1.jpg",
    },
    {
        service: "Wine Cave",
        explanation:
            "Découvrez un espace dédié au vin et aux moments de convivialité.",
        img: "/citydiet_img/winecave3.jpg",
    },
    {
        service: "Catering",
        explanation:
            "City Diet propose également des prestations de traiteur.",
        img: "/citydiet_img/catering1.jpg",
    },
    {
        service: "Ice Cream",
        explanation: "Une touche sucrée pour terminer votre repas",
        img: "/citydiet_img/iceCream2.jpg",
    },
    {
        service: "Organisation d'événements",
        explanation: "Anniversaires, séminaires, célébrations.",
        img: "/citydiet_img/celebrations.jpg",
    },
    {
        service: "Réservations de groupe",
        explanation: "Des espaces adaptés pour vos réunions.",
        img: "/citydiet_img/reservations.jpg",
    },
];

// Services essentiels affichés dans la section principale des services.
export const essentialServices: serviceType[] = [
    {
        service: "Repas sur place",
        explanation: "Repas sur place dans un cadre agréable et convivial",
        img: "/citydiet_img/restaurant.jpg",
    },
    {
        service: "Vente à emporter",
        explanation: "Commandez vos plats et emportez-les avec vous.",
        img: "/citydiet_img/servicerapide.jpg",
    },
    {
        service: "Petit-déjeuner",
        explanation:
            "Commencez votre journée avec une sélection adaptée à vos envies.",
        img: "/citydiet_img/breakfast1.jpg",
    },
    {
        service: "Traiteur",
        explanation:
            "Faites appel à notre service pour accompagner vos événements et occasions spéciales.",
        img: "/citydiet_img/pianobar1.jpg",
    },
];

// Descriptions courtes des catégories de spécialités.
export const specialities = [
    {
        speciality: "Shawarma",
        text: "Une option gourmande pour une pause rapide.",
    },
    {
        speciality: "Brochette",
        text: "Découvrez nos grillades préparées pour les amateurs de saveurs.",
    },
    {
        speciality: "Desserts",
        text: "Terminez votre repas avec une touche sucrée.",
    },
];

// Plats et desserts affichés dans la catégorie « Dessert ».
export const Dessert: specialityType[] = [
    {
        category: "dessert",
        name: "Coupe glacée maison",
        description: "Trois boules au choix, coulis",
        price: "2 000 FCFA",
        img: "/citydiet_img/coupe3.jpg",
    },
    {
        category: "dessert",
        name: "Fondant au chocolat",
        description: "Cœur chocolaté fondant, souvent servi avec glace vanille.",
        price: "2 200 FCFA",
        img: "/citydiet_img/sundaechoco.jpg",
    },
    {
        category: "dessert",
        name: "Glace artisanale",
        description: "Parfums variés selon disponibilité",
        price: "800 FCFA",
        img: "/citydiet_img/artisanale2.jpg",
    },
    {
        category: "dessert",
        name: "Pancakes",
        description: "Parfums chocolat, fraise, caramel",
        price: "5900 FCFA",
        img: "/citydiet_img/artisanale4.jpg",
    },
];

// Plats affichés dans la catégorie « Shawarma ».
export const Shawarma: specialityType[] = [
    {
        category: "shawama",
        name: "Shawarma poulet",
        description: "Mariné et grillé minute, sauce à l'ail.",
        price: "2 000 FCFA",
        img: "/citydiet_img/shawarmapoulet2.jpg",
    },
    {
        category: "shawama",
        name: "Shawarma bœuf",
        description: "Épices maison, crudités fraîches.",
        price: "2 200 FCFA",
        img: "/citydiet_img/shawarmaviande1.jpg",
    },
    {
        category: "shawama",
        name: "Shawarma mixte",
        description: "Poulet et bœuf, sauce au choix",
        price: "2 500 FCFA",
        img: "/citydiet_img/shawarmamixte.jpg",
    },
];

// Plats affichés dans la catégorie « Grillade ».
export const Grillade: specialityType[] = [
    {
        category: "grill",
        name: "Brochettes de bœuf",
        description: "Mariné et grillés au charbon.",
        price: "2 500 FCFA",
        img: "/citydiet_img/brochettes.jpg",
    },
    {
        category: "grill",
        name: "Poisson braisé",
        description: "Tilapia entier, épices locales.",
        price: "4 500 FCFA",
        img: "/citydiet_img/poissonbraise.jpg",
    },
    {
        category: "grill",
        name: "Poulet braisé",
        description: "Mariné aux épices camerounaises, sauce piquante",
        price: "4 000 FCFA",
        img: "/citydiet_img/pouletbraise.jpg",
    },
    {
        category: "grill",
        name: "Brochettes mixtes",
        description: "Bœuf, poulet et légumes grillés",
        price: "3 000 FCFA",
        img: "/citydiet_img/brochettesmixtes.jpg",
    },
];

// Photos et légendes des éléments de l'album.
export const album: albumType[] = [
    { title: "room", photo: "/citydiet_img/convivial2.jpg" },
    { title: "kitchen", photo: "/citydiet_img/persoqualif2.jpg" },
    { title: "plate", photo: "/citydiet_img/koki1.jpg" },
    { title: "dessert", photo: "/citydiet_img/coupe3.jpg" },
    { title: "pianobar", photo: "/citydiet_img/pianobar2.jpg" },
    { title: "personal", photo: "/citydiet_img/convivial1.jpg" },
    { title: "event", photo: "/citydiet_img/celebrations.jpg" },
];

// Texte introductif affiché au-dessus de l'album.
export const albumDescription: string =
    "Découvrez les différents espaces et moments qui font vivre notre établissement.";

// Arguments mettant en avant les avantages de l'établissement.
export const whyUs = [
    { why: "Pour tous", text: "Étudiants, groupes, touristes..." },
    {
        why: "Plusieurs formules",
        text: "Sur place, à emporter, déjeuner, dîner...",
    },
    {
        why: "Pour vos événements",
        text: "Service de traiteur et possibilités de réservation.",
    },
    {
        why: "Accessible",
        text: "Parking gratuit et stationnement dans la rue.",
    },
];
