import { Dessert, Grillade, Shawarma } from "../elements/speciality";
import type { specialityType } from "../elements/types";
import '../styles/specialities.css'
import { useState } from "react";

export function Specialities () {

    const card = [...Shawarma, ...Grillade, ...Dessert]
    const [activeFilter, setActiveFilter] = useState<string>("shawama")

    const filteredCard:specialityType[] = card.filter((elt) => {
        return (elt.category === activeFilter)
    })

    const shawamaStyle = () => {
        return activeFilter === "shawama"? "active-filter": "no-active"
    }
    const dessertStyle = () => {
        return activeFilter === "dessert"? "active-filter": "no-active"
    }
    const grillStyle = () => {
        return activeFilter === "grill"? "active-filter": "no-active"
    }

    return (
        <div className="specialities-main-container">
            <h2>Nos spécialités</h2>
            <div className="specialities-second-container">
                <div className="specialities-container">
                    <button className={shawamaStyle()} onClick={() => setActiveFilter("shawama")}>Shawarma</button>
                    <button className={grillStyle()} onClick={() => setActiveFilter("grill")}>Grillade</button>
                    <button className={dessertStyle()} onClick={() => setActiveFilter("dessert")}>Dessert</button>
                </div>
                <div className="dishes">
                    {filteredCard.map((elt) => (
                        <div className="dish" key={elt.name}>
                            <div className="first-line">
                                <h3>{elt.name}</h3>
                                <div className="price">{elt.price}</div>
                            </div>
                            <p>{elt.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}