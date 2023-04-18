import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/Logo.png'
import { StyledLink } from '../../utils/style/link'

// CSS Header //
// ----------------------------------------------------------------- //

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 100px 0 100px;
    @media (max-width: 768px){
        margin: 40px 20px 0 20px;
      } 
`

const StyledLogo = styled.img`
    width: 150px;
    @media (max-width: 768px){
        width: 120px;
      } 
`



// ----------------------------------------------------------------- //


function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                <StyledLogo src={Logo} alt="Logo société Kasa"/>
            </Link>
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/Propos">A Propos</StyledLink>
        </nav>
        </StyledHeader>
    )
}

export default Header;