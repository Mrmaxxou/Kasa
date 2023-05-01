import styled from 'styled-components'
import colors from '../../utils/colors'
import { StyledLink404 } from '../../utils/link'

// CSS Error //
// ----------------------------------------------------------------- //

const StyledBlock = styled.div`
margin: 0px 100px 0px 100px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px){
    margin: 0px 30px 0px 30px;
  } 
`

const StyledText = styled.h1`
  font-size: 288px;
  color: ${colors.primary};
  font-weight: 700;
  margin-top: 186px;
  @media (max-width: 768px){
    font-size: 96px;
  } 
`

const StyledTextp = styled.p`
    font-size: 36px;
    text-align: center;
    color: ${colors.primary};
    font-weight: 500;
    margin-top: 66px;
    @media (max-width: 768px){
        font-size: 18px;
      } 
`

// ----------------------------------------------------------------- //

function Error(){
    return (
        <StyledBlock>
        <StyledText>404</StyledText>
        <StyledTextp>Oups! La page que vous demandez n'existe pas.</StyledTextp>
        <StyledLink404 to="/">Retourner sur la page d'accueil</StyledLink404>
        </StyledBlock>
    )
}

export default Error