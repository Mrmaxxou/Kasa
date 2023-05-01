import '../../utils/style/card.css';

import DataLogements from '../../Datas/logements.json'
import {Link} from 'react-router-dom'


function Card() {
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

export default Card;