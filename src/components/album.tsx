import '../styles/album.css'
import { albumDescription } from '../elements/album'

export function Album () {

    return (
        <div className="album-main-container">
            <h2>Album</h2>
            <p className='album-description'>{albumDescription}</p>
            <div className="album-container">
                <div className="one"><span>La Salle</span></div>
                <div className="two"><span>Le bar</span></div>
                <div className="three"><span>La terrasse</span></div>
                <div className="four"><span>La cave</span></div>
            </div>
        </div>
    )
}