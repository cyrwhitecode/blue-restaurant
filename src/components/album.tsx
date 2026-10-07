import '../styles/album.css'
import { galleryImages } from '../elements/infos'

export function Album () {

    return (
        <div className="album-main-container">
            <h2>Galerie</h2>
            <p className='album-description'>Un aperçu de l’ambiance, des plats et des espaces du restaurant.</p>
            <div className="album-container">
                {galleryImages.map((item, index) => (
                    <div
                        key={`${item.title}-${index}`}
                        className={`album-item item-${index + 1}`}
                        style={{ backgroundImage: `url(${item.photo})` }}
                    >
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}