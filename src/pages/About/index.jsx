// Importation des compsants "Collapse" & "Banner"
import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'

// Import du fichier json contenant les données "A propos"
import dataAbout from '../../Datas/About.json'

// Import des fichier style css
import '../../utils/style/banner.css'
import '../../utils/style/collapse.css'
import '../../utils/style/about.css'

// Création d'un composant React "About"
function About(){
    // Utilisation de map pour générer la liste de données présent dans le json
    return (
        <section className="container-about">
            <Banner bannerClass="container-banner-about"/>
            {dataAbout.map((data) => (
            <Collapse collapseClass="container-collapse-about"
              key={data.title}
              title={data.title}
              text= {data.text}
            />
            ))}
        </section>
    )

}

// Export de la fontion About
export default About