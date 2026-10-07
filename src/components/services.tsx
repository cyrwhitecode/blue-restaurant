import { availableServices, restaurantServices, highlights } from "../elements/infos";
import '../styles/service.css'

const serviceDescriptions: Record<string, string> = {
    "Vente à emporter": "Commandez votre repas et emportez-le.",
    "Repas sur place": "Installez-vous au restaurant pour profiter de votre repas.",
    "Déjeuner": "Une offre de restauration est proposée le midi.",
    "Dîner": "Une offre de restauration est proposée le soir.",
    "Traiteur": "Un service traiteur est disponible.",
    "Desserts": "Des desserts sont proposés pour terminer votre repas.",
    "Service à table": "Profitez de votre repas avec un service à table.",
};

export function Service () {

    return (
        <div className="services-main-container">
            <h2>Nos Services</h2>
            <div className="services-container">
                {availableServices.map((serv) => (
                    <div className="service" key={serv}>
                        <h3>{serv}</h3>
                        <p>{serviceDescriptions[serv]}</p>
                    </div>
                ))}
                {restaurantServices.map((serv) => (
                    <div className="service" key={serv}>
                        <h3>{serv}</h3>
                        <p>{serviceDescriptions[serv]}</p>
                    </div>
                ))}
            </div>
            <div className="highlights-box">
                <h3>Points forts</h3>
                <ul className="highlights-list">
                    {highlights.map((item) => (
                        <li className="highlight-pill" key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <button className="hero-contact-btn">
                <a href="#contact">Nous contacter</a>
            </button>
        </div>
    )
}