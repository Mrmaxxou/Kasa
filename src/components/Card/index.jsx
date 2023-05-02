// Import du fichier style css
import '../../utils/style/card.css';

// Import du fichier json contenant les données logement
import DataLogements from '../../Datas/logements.json'

// Import du composant Link du module react-router-dom
import {Link} from 'react-router-dom'

// Création d'un composant React "Card" 
function Card() {
    // Utilisation de la méthode map pour parcourir le tableau DataLogements et créer un élément div pour chaque éléments //
    // Création d'un link qui ammène à la page logement en incluant l'id de la donnée en tant que paramètre de recherche //
    return (
        <section className="container-allcard">
            {DataLogements.map((data) => (
                <div className="container-card" key={data.id}>
                    <Link to={{pathname: "/logement/", search: "?id=" + data.id}}>
                        <div className="card-background"></div>
                        <h2 className="card-title">{data.title}</h2>
                        <img className="card-img" src={data.cover} alt={data.title} />
                    </Link>
                </div>
            ))}
        </section>
    );
}

// Export de la fontion Banner
export default Card;