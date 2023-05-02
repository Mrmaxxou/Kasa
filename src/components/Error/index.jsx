// Import du fichier style css
import '../../utils/style/error.css'
// Import du composant StyledLink404
import { StyledLink404 } from '../../utils/link'

// Création d'un composant React "Error" 
function Error(){
    return (
        <div className="container-error">
        <h1 className="container-error-title">404</h1>
        <p className="container-error-text">Oups! La page que vous demandez n'existe pas.</p>
        <StyledLink404 to="/">Retourner sur la page d'accueil</StyledLink404>
        </div>
    )
}

// Export de la fontion Error
export default Error