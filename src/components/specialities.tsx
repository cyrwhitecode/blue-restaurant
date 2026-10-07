import { useState } from "react";
import { popularDishes } from "../elements/infos";
import '../styles/specialities.css'

export function Specialities () {

    const [activeFilter, setActiveFilter] = useState<string>("all")

    const filteredCard = activeFilter === "all"
        ? popularDishes
        : popularDishes.filter((elt) => elt.category.toLowerCase().includes(activeFilter.toLowerCase()))

    return (
        <div className="specialities-main-container">
            <h2>Meilleures offres</h2>
            <div className="specialities-second-container">
                <div className="specialities-container">
                    <button className={activeFilter === "all" ? "active-filter" : "no-active"} onClick={() => setActiveFilter("all")}>Tout</button>
                    <button className={activeFilter === "plats" ? "active-filter" : "no-active"} onClick={() => setActiveFilter("plats")}>Plats</button>
                    <button className={activeFilter === "populaires" ? "active-filter" : "no-active"} onClick={() => setActiveFilter("populaires")}>Populaires</button>
                </div>
                <div className="dishes">
                    {filteredCard.map((elt) => (
                        <div className="dish" key={elt.name}>
                            <div className="dish-image"></div>
                            <div>
                                <div className="first-line">
                                    <h3>{elt.name}</h3>
                                    <div className="price">{elt.price}</div>
                                </div>
                                <p>{elt.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}