import imgBannerHome from '../../assets/banners-home.jpg'
import imgBannerAbout from '../../assets/banners-propos.jpg'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

// CSS Banner // 
// ----------------------------------------------------------------- //


const StyledBannerHome = styled.div`
position: relative;  
background: url(${imgBannerHome}) center no-repeat;
background-size: cover;
border-radius: 30px;
@media (max-width: 768px){
  border-radius: 10px;
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
  margin: 0;
  padding: 70px 260px 70px 260px;
  color: ${colors.secondary};
  @media (max-width: 768px){
    font-size: 24px;
    justify-content: flex-end;
    padding: 20px 100px 20px 16px;
  } 
`

const StyledBannerAbout = styled.div`
position: relative;  
background: url(${imgBannerAbout}) center no-repeat;
background-size: cover;
border-radius: 30px;
padding: 30px 0 30px 0;
@media (max-width: 768px){
  border-radius: 10px;
  padding: 30% 0% 30% 0%;
} 
`

// ----------------------------------------------------------------- //


function BannerTitre(){
return (
    <StyledBannerHome>
        <StyledBackgroundImg></StyledBackgroundImg>
        <StyledTexth1> Chez vous, partout et ailleurs </StyledTexth1>
    </StyledBannerHome>
)

}

function BannerAbout(){
return (
    <StyledBannerAbout>
        <StyledBackgroundImg></StyledBackgroundImg>
        <StyledTexth1></StyledTexth1>
    </StyledBannerAbout>
)

}



export default BannerTitre
export {BannerAbout}
