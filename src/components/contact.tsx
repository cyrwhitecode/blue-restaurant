import { useState } from "react";
import { address, phone, phoneDisplay, openingStatus, closingTime } from "../elements/infos";
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
    const message = `Bonjour, je m'appelle ${name}, \n Mon numéro est le ${clientPhone.replaceAll(" ", "")}.\n\n Je souhaite réserver une table pour ${places} personne(s) le ${date} à ${hour}.\n Merci et bonne journée.`
    const infoText = `${openingStatus} · Ferme à ${closingTime}`;


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!name || !date || !clientPhone || !hour || !places) {
            setError("Veuillez remplir tous les champs correctement !")
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
                    <h1>Réserver une table</h1>
                    <p>{infoText}</p>
                </div>
                <div className="adress sub">
                    <div className="title">Adresse</div>
                    <p>{address}</p>
                </div>
                <div className="phone sub">
                    <div className="title">Téléphone</div>
                    <p>{phoneDisplay}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div className="form-input">
                    <label>Nom <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Votre nom" /></label>
                    <label>Téléphone <input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} type="text" placeholder="237 6 XX XX XX XX" /></label>
                    <label>Date <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date" /></label>
                    <label>Heure <input value={hour} onChange={(e) => setHour(e.target.value)} type="time" placeholder="Heure de passage" /></label>
                    <label>Places 
                        <select value={places} onChange={(e) => setPlaces(e.target.value)}>
                            <option value="">Selectionner</option>
                            <option value="1">1 personne</option>
                            <option value="2">2 personnes</option>
                            <option value="3">3 personnes</option>
                            <option value="4">4 personnes</option>
                            <option value="5">5 personnes</option>
                            <option value="plusieurs (plus de 6)">6 personnes et plus</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Confirmer la réservation</button>
                <div className="error-container">
                    {error === ""? null: (<span>{error}</span>)}
                </div>
            </form>
        </div>
    )
}