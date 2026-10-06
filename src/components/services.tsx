import { essentialServices, contactBtnText } from "../elements/data";
import '../styles/service.css'

export function Service () {

    return (
        <div className="services-main-container">
            <h2>Nos Services</h2>
            <div className="services-container">
                {essentialServices.map((serv) => (
                    <div className="service" key={serv.service}>
                        <h3>{serv.service}</h3>
                        <p>{serv.explanation}</p>
                    </div>
                ))}
            </div>
            <button className="hero-contact-btn">
                <a href="#contact">{contactBtnText}</a>
            </button>
        </div>
    )
}