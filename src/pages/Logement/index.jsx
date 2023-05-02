// Import de la bibliothèque useHistory de react-router-dom
import {useHistory} from 'react-router-dom';

// Import du fichier json contenant les données "Logement"
import dataLogements from '../../Datas/logements.json'

// Importation des compsants "Carroussel" , "Collapse" & "Rating"
import Collapse from '../../components/Collapse';
import Carroussel from '../../components/Carroussel';
import Rating from '../../components/Rate';

// Import des fichiers style css
import '../../utils/style/logement.css'
import '../../utils/style/rate.css'

// Création d'un composant React "Logement"
function Logement(){

    // Récupération de l'historique de navigation 
    const history = useHistory();

    // Récupération de la chaîne de requête dans l'URL
    const LogementUrl = window.location.search;

    // Extraction de l'Id dans la chaîne de requête
    let LogementId = new URLSearchParams(LogementUrl);
    const id = LogementId.get('id');

    // Récupération des données des logements
    // Recherche du logement correspondant à l'Id 
    const data = dataLogements;
    const itemLogement = data.find(item => item.id === id);

    // Condition : Si l'Id est invalide ou si le logement correspondant n'existe pas, redirection vers la page d'erreur 404
    if (!id || !itemLogement) {
        history.push('/error404');
        return null;
      }
    
    // Récupération de la note de satisfaction du logement
    const rating= itemLogement.rating;
    
    return (
        // Retourne : 
        // Le carrousel des images correspondant à l'id du logement
        // Affiche les tags du logement à l'aide de map
        // Affiche la note de satisfaction à l'aide de la note récupéré 
        // Affiche les collapses des des description et des équipements qui sont récupérer à l'aide de map 
        <div className="block-logement">
                <Carroussel logementId={id}/>
            <div className= "block-description">
                <div className= "block-description-title">
                    <div>
                        <h1 className="logement-title">{itemLogement.title}</h1>
                        <p className="logement-text">{itemLogement.location}</p>
                    </div>
                    <div className="container-tags">
                    <ul className="groupe-tags">
                            {itemLogement.tags.map((data, index) => (
                                <li className="tags__style" key={index}>{data}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="block-name-rate">
                    <div className= "block-name">
                        <p className="block-name-text">{itemLogement.host.name}</p>
                        <img className="block-name-picture"src={itemLogement.host.picture} alt='Profil du propriétaire'></img>
                    </div>
                    <div className="block-rate">
                        <Rating score={rating} />
                    </div>
                </div>
            </div>
            <div className="block-collapse">
                <Collapse collapseClass="container-collapse-logement"
                    title = {"Description"}
                    text = {itemLogement.description} 
                />
                <Collapse collapseClass="container-collapse-logement"
                    title = {"Equipements"}
                    text = {
                        <ul className="block-listequipment">
                            {itemLogement.equipments.map((data, index) => (
                                <li key={index}>{data}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>  
    )
}

// Export de la fontion Logement
export default Logement;