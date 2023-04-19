import styled from 'styled-components'
import Background from '../../assets/banners-home.jpg'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'

import DataLogements from '../../Datas/logements.json'



// CSS Home //
// ----------------------------------------------------------------- //

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 70px 100px 30px 100px;
  @media (max-width: 768px){
    margin: 16px 20px 22px 20px;
  } 

`

const StyledBanner = styled.div`
position: relative;  
background: url(${Background}) center no-repeat;
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

const StyledBlockCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${colors.backgroundBlockCard};
  border-radius: 25px;
  margin-top: 40px;
  padding: 31px 0px 31px 0px;
  @media (max-width: 768px){
    background-color: transparent;
  } 
`
// ----------------------------------------------------------------- //

function Home(){
  return (
  <StyledHome>
    <StyledBanner>
      <StyledBackgroundImg></StyledBackgroundImg>
      <StyledTexth1>Chez vous, partout et ailleurs</StyledTexth1>
    </StyledBanner>
    <StyledBlockCard>
      {DataLogements.map((profile, index) => (
        <Card
          key={`${profile.id}-${index}`}
          title={profile.title}
          cover= {profile.cover} />
      ))}  
    </StyledBlockCard>

  </StyledHome>)
}

export default Home