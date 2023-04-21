import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

// CSS Banner // 
// ----------------------------------------------------------------- //


const StyledBannerHome = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  width: 100%;
  height: 223px;
  background: url(${props => props.backgroundImg}) center no-repeat;
  background-size: cover;
  border-radius: 30px;
  @media (max-width: 768px){
    border-radius: 10px;
    height: ${props => props.height};
    margin: 0;
  } 
`

const StyledBackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  border-radius: 30px;
  @media (max-width: 768px){
    border-radius: 10px;
  } 
`
const StyledTexth1 = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  color: ${colors.secondary};
  @media (max-width: 768px){
    font-size: 24px;
    margin-left: 20px;
  } 
`

// ----------------------------------------------------------------- //

function Banner(props){
  return (
    <StyledBannerHome backgroundImg={props.backgroundImg} height={props.height}>
        <StyledBackgroundImg/>
        <StyledTexth1>{props.title}</StyledTexth1>
    </StyledBannerHome>
  )
}

export default Banner