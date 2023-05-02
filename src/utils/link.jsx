// Import du composant Link du module react-router-dom
// Import de Styled du module styled components
import {Link} from 'react-router-dom'
import styled from 'styled-components'

// Import des style css
import './style/index.css'

export const StyledLink = styled(Link)`
    padding-left: 57px;
    color: var(--primary);
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    &:hover {
        text-decoration: underline;
        color: var(--primary);
    }
    @media (max-width: 768px){
        font-size: 12px;
        text-transform: uppercase;
        padding-left: 15px;
      }
`

export const StyledLink404 = styled(Link)`
    margin: 182px 0px 160px 0px;
    color: var(--primary);
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    &:hover {
        text-decoration: underline;
        color: var(--primary);
    }
    @media (max-width: 768px){
        font-size: 14px;
      } 

`