import '../styles/album.css'

export function Album () {

    return (
        <div className="album-main-container">
            <h2>Album</h2>
            <div className="album-container">
                <div className="one"><span>La Salle</span></div>
                <div className="two"><span>La bar</span></div>
                <div className="three"><span>La terasse</span></div>
                <div className="four"><span>La cave</span></div>
            </div>
        </div>
    )
}