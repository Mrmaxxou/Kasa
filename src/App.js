import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


// Importation des éléments du dossier "pages"
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';

// Importation des éléments du dossier "components"
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

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

export default App