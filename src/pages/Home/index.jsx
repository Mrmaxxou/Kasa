// Import des fichier style css
import '../../utils/style/banner.css'
import '../../utils/style/home.css'

// Importation des compsants "Card" & "Banner"
import Card from '../../components/Card'
import Banner from '../../components/Banner'

// Création d'un composant React "Home"
function Home(){
  
  return (
  <section className="container-home">
    <Banner bannerClass="container-banner-home" title={"Chez nous, partout et ailleurs"}/>
    <div className="container-cardlogements">
        <Card />
    </div>
  </section>)
}

// Export de la fontion Home
export default Home