import { restaurantName, restaurantType, city, openingStatus, closingTime } from "../elements/infos"
import '../styles/hero.css'

export function Hero () {

    return (
        <div className="hero-container">
            <div className="craft">
                <div className="craft-elt">
                    <p>{openingStatus}</p>
                    <h2>{restaurantType} • {city}</h2>
                </div>
            </div>
            <div className="hero-pres">
                <div>
                    <div className="mark-hero"><span></span>{restaurantName}</div>
                    <h1 className="slogan">{restaurantName} • {openingStatus} jusqu’à {closingTime}</h1>
                </div>
                <div className="hero-btn">
                    <button className="serv-btn">
                        <a href="#services">Découvrez nos services</a>
                    </button>
                    <button className="hero-contact-btn">
                        <a href="#contact">Nous contacter</a>
                    </button>
                </div>
            </div>
        </div>
    )
}