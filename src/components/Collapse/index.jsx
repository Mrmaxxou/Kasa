// Import du hook useState de React 
import React, {useState} from "react";

// Import du fichier style css et de l'icone arrow
import '../../utils/style/collapse.css';
import IconCollapse from '../../assets/arrow_back_ios.svg'

// Création d'un composant React "Collapse" avec des paramètres "title", "text", "collapseClass"
function Collapse({ title, text, collapseClass }) {
  // Initilisation de l'état "collapse"
    const [collapsed, setCollapsed] = useState(false);

  // Fonction pour changer l'état de "collapse" lors du clique sur l'îcone
    function toggleCollapse() {
      setCollapsed(!collapsed);
    }
    // Retourn de l'élément carousel //
    // Avec l'icône pour déplier/replier & le contenu de la collapse qui peut être déplié ou replié
    return (
      <section className={collapseClass}>
        <div className="collapse-icontitle">
          <h3 className="collapse-title">{title}</h3>
          <img
            className={`collapse-icons ${collapsed ? 'collapsed' : ''}`}
            src={IconCollapse}
            alt="Icone déplit-replis"
            onClick={toggleCollapse}
          />
        </div>
        <div className={`collapse-backgroundtext collapse__content ${collapsed ? 'collapse__content--expanded' : ''}`}>
          <div className="collapse-text">{text}</div>
        </div>
      </section>
    );
  }

// Export de la fontion Collapse
export default Collapse;