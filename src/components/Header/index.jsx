// Import du composant Link du module react-router-dom
import { Link } from 'react-router-dom'

// Import du logo kasa
import Logo from '../../assets/Logo.png'

// Import du composant StyledLink
import { StyledLink } from '../../utils/link'

// Import du fichier style css
import '../../utils/style/header.css'

// Création d'un composant React "Header" 
function Header() {
    return (
        <header>
            <Link to="/">
                <img className="logo-style" src={Logo} alt="Logo société Kasa"/>
            </Link>
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/Propos">A Propos</StyledLink>
        </nav>
        </header>
    )
}

// Export de la fontion Header
export default Header;