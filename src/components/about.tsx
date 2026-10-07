import { restaurantName, restaurantType, city, address } from "../elements/infos";
import '../styles/about.css'

export function About () {

    return (
        <div className="about-container">
            <h2>Bienvenue chez {restaurantName}</h2>
            <div className="presentation-container">
                <p>{restaurantName} est un espace convivial à {city}, parfait pour profiter d’un repas agréable, d’un moment de détente ou d’une soirée entre amis.</p>
                <p>{restaurantType} situé à {address}. On y retrouve une ambiance décontractée, un bon accueil et une offre adaptée aux déjeuners, dîners et moments de partage.</p>
            </div>
        </div>
    )
}