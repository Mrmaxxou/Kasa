// Importation de React 
import React from 'react';
// Importationde de createRoot de ReactDOM
import { createRoot } from 'react-dom/client'

// Importation de l'ensemble App 
import App from './App';

// Importation du fichier style css
import './utils/style/index.css'

// Création de la racine de l'application React 
createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
  </React.StrictMode>,
);