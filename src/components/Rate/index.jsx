// Import des éléments svg des étoiles 
import greyStar from '../../assets/Greystar.svg'
import pinkStar from '../../assets/Pinkstar.svg'

// Création d'un composant React "Header" avec un paramètre "score"
function Rating({score}){
// Création d'une const qui contient les valeurs des niveaux d'évaluation possibles
    const stars = [1, 2, 3, 4, 5];
    return(
        // Retourne l'affichage des étoiles de la note 
        // Utilisation de la méthode map pour parcourir le tableau et afficher chaque étoiles 
        // Si le score(Rating) est supérieur ou égal à la valeur du level on affiche les étoiles rose, sinon on affiche des étoiles grises. 
        <div className="container-rate">
            {stars.map((level) =>
                score >= level ? (
                    <img 
                    key={level.toString()}
                    className="star"
                    src={pinkStar}
                    alt="Notes"
                    />
                ) : (
                    <img 
                    key={level.toString()}
                    className="star"
                    src={greyStar}
                    alt="Notes"
                    />
                ))}
        </div>
    )
}

// Export de la fontion Header
export default Rating