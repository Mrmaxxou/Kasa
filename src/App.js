// Import des composants utile de react-router-dom
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


// Importation des pages "Home", "About" & "Logement"
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';

// Importation des composants "Header", "Footer" & "Error"
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

// Création d'un composant React "App" (Définition des Routes)
function App() {

    return(
            <Router>
                <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/logement/:id?">
                            <Logement />
                        </Route>
                        <Route path="/propos">
                            <About />
                        </Route>
                        <Route>
                            <Error path="*"/>
                        </Route>
                    </Switch>
                <Footer />
                
            </Router>
    )
}

// Export de la fontion App
export default App