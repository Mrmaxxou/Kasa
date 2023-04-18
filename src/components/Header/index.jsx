import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo.png'


function Header() {
    return (
        <div>
            <div>
                <img src={Logo} alt="Logo Kasa"/>
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/Propos">A Propos</Link>
            </nav>
        </div>   
    )
}

export default Header;