import { restaurantName } from '../elements/infos';
import '../styles/header.css'

export const Header = ({ 
        active, setActive, toggle, style 
    }:{
        active:string; 
        setActive:React.Dispatch<React.SetStateAction<string>>; 
        toggle: () => void; 
        style: () => string}) => {


    return (
        <div className='header-container'>
            <div className='logo'>{restaurantName}</div>

            <div className='mobile-menu'> 
                <button className='menu-btn' onClick={() => toggle()}>Menu</button>
                <div className={style()}>
                    <a href="#hero" className={active === "#hero"? "active": ""} onClick={() => setActive("#hero")}>Accueil</a>
                    <a href="#about" className={active === "about"? "active": ""} onClick={() => setActive("about")}>À propos</a>
                    <a href="#services" className={active === "services"? "active": ""} onClick={() => setActive("services")}>Services</a>
                    <a href="#album" className={active === "album"? "active": ""} onClick={() => setActive("album")}>Album</a>
                    <a className='reservation' href="#contact" onClick={() => setActive("contact")}>Réservation</a>
                    
                </div>
            </div>

            <div className='desk-menu'>
                <div className='desk-links'>
                    <a href="#hero" className={active === "#hero"? "active": ""} onClick={() => setActive("#hero")}>Accueil</a>
                    <a href="#about" className={active === "about"? "active": ""} onClick={() => setActive("about")}>À propos</a>
                    <a href="#services" className={active === "services"? "active": ""} onClick={() => setActive("services")}>Services</a>
                    <a href="#album" className={active === "album"? "active": ""} onClick={() => setActive("album")}>Album</a>
                    <a href="#contact" className={active === "contact"? "active": ""} onClick={() => setActive("contact")}>Contact</a>
                </div>
                <a className='desk-reservation' href='#contact'>Réservation</a>
            </div>
        </div>
    )
}