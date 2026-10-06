import { contactBtnText, servBtnText, slogan } from "../elements/data"
import '../styles/hero.css'

export function Hero () {

    return (
        <div className="hero-container">
            <div className="craft">
                <div className="craft-elt">
                    <p>Depuis 2018</p>
                    <h2>Salles - Terrasse - Bar</h2>
                </div>
            </div>
            <div className="hero-pres">
                <div>
                    <div className="mark-hero"><span></span>Restaurant à Yaoundé</div>
                    <h1 className="slogan">{slogan}</h1>
                </div>
                <div className="hero-btn">
                    <button className="serv-btn">
                        <a href="#services">{servBtnText}</a>
                    </button>
                    <button className="hero-contact-btn">
                        <a href="#contact">{contactBtnText}</a>
                    </button>
                </div>
            </div>
        </div>
    )
}