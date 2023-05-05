// Import des hook useState et useEffect de React 
import {useState, useEffect} from 'react'

// Import du fichier json contenant les données logement
import itemLogement from '../../Datas/logements.json'

// Import du fichier style css et de l'icone arrow
import  '../../utils/style/carousel.css'
import IconCarousel from '../../assets/arrow_back_ios.svg'

// Création d'un composant React "Carousel" 
function Carousel ({logementId}) {
    // Initilisation des états "pictures" & "index"
    const [pictures, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    // Mise à jour du tableau "pictures" à chaque changement de l'id logement
    useEffect(() => {
        // Recherche de l'objet logement correcpondant à l'id
        // Mise à jour du tableau d'images de logement
        const logement = itemLogement.find(item => item.id === logementId);
        setImages(logement.pictures);
    }, [logementId]);

    // Récupère l'image à afficher selon l'index 
    let carouselImg = pictures[index]

    // Détermine les extrémités pour suivant & précédent
    let stopPrev = index > 0
    let stopNext = index < pictures.length -1;

    // Définition des deux fonction qui mettent à jour l'état index en fonction du bouton cliqué si il est encore possible de cliquer dessus
    function nextClick(){
        if (stopNext){
            if (index === pictures.length -1){
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        } else {
            setIndex(0)
        }
        
    }

    function previousClick() {
        if (stopPrev) {
            if (index === 0) {
                setIndex(pictures.length - 1);
            } else {
                setIndex(index - 1);
            }
        } else {
            setIndex(pictures.length -1)
        }
    }

    // Retourn de l'élément carousel //
    // Avec une condition que affiche les précédent, suivant et bulletpoint si il y a plus d'une image
    // Le bullet point est crée avec le nombre total d'image et la position de l'index actuel. 
    return(

        <div className="block-carousel">
            {pictures.length > 1 && (
                
                <>
                <img className="block-Next" src={IconCarousel} alt="Suivant" onClick={nextClick}></img>
                <img className="block-Previous" src={IconCarousel} alt="Précédent" onClick={previousClick}></img>
                <span className="bullet-points">{index+1}/{pictures.length}</span>
                </>
            )}
        <img className="block-img "src={carouselImg} alt="Carousel d'images "></img>
        </div>
    )
}



// Export de la fontion Carousel
export default Carousel