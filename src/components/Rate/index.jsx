// Import des éléments svg des étoiles 
import greyStar from '../../assets/Greystar.svg'
import pinkStar from '../../assets/Pinkstar.svg'

function Rating({score}){
// Création d'une const qui contient les valeurs des niveaux 
    const stars = [1, 2, 3, 4, 5];
    return(

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

export default Rating