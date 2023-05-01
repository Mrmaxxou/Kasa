import {useState, useEffect} from 'react'
import itemLogement from '../../Datas/logements.json'

import  '../../utils/style/carousel.css'
import IconCarousel from '../../assets/arrow_back_ios.svg'




function Carousel ({logementId}) {
    const [pictures, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const logement = itemLogement.find(item => item.id === logementId);
        setImages(logement.pictures);
    }, [logementId]);

    let carouselImg = pictures[index]

    let stopPrev = index > 0
    let stopNext = index < pictures.length -1;

    function nextClick(){
        if (stopNext){
            setIndex(index + 1);
        }
        
    }

    function previousClick() {
        if (stopPrev){
            setIndex(index - 1);
        }
    }

    console.log(pictures.length)

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




export default Carousel