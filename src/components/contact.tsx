import { useState } from "react";
import {  adress2, phone, text } from "../elements/contact";
import '../styles/contact.css'
import { whatsapp } from "../elements/whatsapp";
import type { SyntheticEvent } from "react";


export function Contact () {

    const [name, setName] = useState<string>("")
    const [clientPhone, setClientPhone] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [hour, setHour] = useState<string>("")
    const [places, setPlaces] = useState<string>("")
    const [error, setError] = useState<string>("")
    const message = `Bonjour, je m'appelle ${name}, \n Mon numero est le ${clientPhone.replaceAll(" ", "")}.\n\n Je souhaite reserver une table pour ${places} personne(s) le ${date} a ${hour}.\n Merci et bonne journee.`


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!name || !date || !phone || !hour || !places) {
            setError("Veillez remplir tous les champs correctement !!")
            return
        } 
        window.open(whatsapp(Number(phone), message), "_blank")
        setName("");
        setClientPhone("");
        setDate("");
        setHour("");
        setPlaces("");
        setError("");
    }


    return (
        <div className="contact-container">
            <div className="info-bloc">
                <div className="start-bloc">
                    <h1>Reserver une Table</h1>
                    <p>{text}</p>
                </div>
                <div className="adress sub">
                    <div className="title">Adresse</div>
                    <p>{adress2}</p>
                </div>
                <div className="phone sub">
                    <div className="title">Telephone</div>
                    <p>{phone}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div className="form-input">
                    <label>Nom <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Votre nom" /></label>
                    <label>Telephone <input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} type="text" placeholder="237 6 XX XX XX XX" /></label>
                    <label>Date <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date" /></label>
                    <label>Heure <input value={hour} onChange={(e) => setHour(e.target.value)} type="time" placeholder="Heure de passage" /></label>
                    <label>Places 
                        <select onChange={(e) => setPlaces(e.target.value)}>
                            <option value="2">2 personnes</option>
                            <option value="3">3 personnes</option>
                            <option value="4">4 personnes</option>
                            <option value="5">5 personnes</option>
                            <option value="plusieurs (plus de 6)">6 personnes et plus</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Confirmer la reservation</button>
                <div className="error-container">
                    {error === ""? null: (<span>{error}</span>)}
                </div>
            </form>
        </div>
    )
}