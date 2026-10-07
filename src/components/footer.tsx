import { city, address, phoneDisplay, restaurantName } from "../elements/infos"
import '../styles/footer.css'

export const Footer = () => {

    return (
        <div className='footer-container'>
            <div className="main-start-bloc">
                <div className="footer-infos">
                    <h3>{restaurantName}</h3>
                    <div className="mark">
                        <p>{address}</p>
                        <p>{city}</p>
                        <p>{phoneDisplay}</p>
                        <p>travourslounge@gmail.com</p>
                    </div>
                </div>
                <div className="footer-navigation">
                    <h3>Navigation</h3>
                    <div className="footer-links">
                        <a href="/">Accueil</a>
                        <a href="#about">À propos</a>
                        <a href="#services">Services</a>
                        <a href="#album">Album</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>Suivre la maison</h3>
                    <div>
                        <p>Facebook</p>
                        <p>WhatsApp</p>
                    </div>
                </div>
            </div>
            <div className="end-bloc">
                <p>{restaurantName} · {city}</p>
                <p>Site conçu par Cyr.</p>
            </div>
        </div>
    )
}