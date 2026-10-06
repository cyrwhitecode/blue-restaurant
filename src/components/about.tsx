import { presentation1, presentation2, welcome } from "../elements/data";
import '../styles/about.css'

export function About () {

    return (
        <div className="about-container">
            <h2>{welcome}</h2>
            <div className="presentation-container">
                <p>{presentation1}</p>
                <p>{presentation2}</p>
            </div>
        </div>
    )
}