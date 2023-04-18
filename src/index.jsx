import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation des éléments du dossier "pages"
import Home from './pages/Home';
import Propos from './pages/Propos';
import Logement from './pages/Logement';

// Importation des éléments du dossier "components"
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

import GlobalStyle from './utils/style/GlobalStyle'

import {BrowserRouter as Router, Route, Switch} from'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logement">
            <Logement />
          </Route>
          <Route path="/propos">
            <Propos />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);