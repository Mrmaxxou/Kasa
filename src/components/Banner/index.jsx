// Import du fichier style css
import '../../utils/style/banner.css'

// Création d'un composant React "Banner" avec des props en paramètres
function Banner(props){
  return (
    <div className={props.bannerClass}>
        <div className="container-background"/>
        <h1 className="container-banner-title">{props.title}</h1>
    </div>
  )
}

// Export de la fontion Banner
export default Banner