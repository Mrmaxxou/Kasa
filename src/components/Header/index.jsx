import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { StyledLink } from '../../utils/link'

// Import header.css
import '../../utils/style/header.css'


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

export default Header;