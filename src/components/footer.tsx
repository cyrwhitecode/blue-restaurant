import { town, phone, adress, email } from "../elements/contact"
import { restaurantName } from "../elements/hero"
import '../styles/footer.css'

export const Footer = () => {

    return (
        <div className='footer-container'>
            <div className="main-start-bloc">
                <div className="footer-infos">
                    <h3>{restaurantName}</h3>
                    <div className="mark">
                        <p>{adress}</p>
                        <p>{town}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
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
                <p>Restaurant City Diet . Yaoundé</p>
                <p>Site conçu par Cyr.</p>
            </div>
        </div>
    )
}