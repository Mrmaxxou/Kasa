// Import du fichier style css
import '../../utils/style/footer.css'

// Import du logo kasa
import Logo from '../../assets/Logo.png'

// Création d'un composant React "Footer" 
function Footer() {
     return (
        <footer>
            <img className="footer-logo" src={Logo} alt="Logo société Kasa"/>
            <p className="footer-text"> © 2020 Kasa. All rights reserved</p>
        </footer>
     )
}

// Export de la fontion Footer
export default Footer