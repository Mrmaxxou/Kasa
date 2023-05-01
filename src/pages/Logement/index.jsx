import {useHistory} from 'react-router-dom';

import dataLogements from '../../Datas/logements.json'
import Collapse from '../../components/Collapse';
import Carroussel from '../../components/Carroussel';
import Rating from '../../components/Rate';

import '../../utils/style/logement.css'
import '../../utils/style/rate.css'


function Logement(){

    const history = useHistory();

// Récupération de la chaîne de requête dans l'URL
    const LogementUrl = window.location.search;

// Extraction de l'Id
    let LogementId = new URLSearchParams(LogementUrl);
    const id = LogementId.get('id');

    const data = dataLogements;
    const itemLogement = data.find(item => item.id === id);

    if (!id || !itemLogement) {
        history.push('/error404');
        return null;
      }

    const rating= itemLogement.rating;
    
    return (
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

export default Logement;