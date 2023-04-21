import React from 'react';
import Banner from '../../components/Banner'
import BannerHome from '../../assets/banners-home.jpg'

import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'

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

const StyledBlockCard = styled.div`
  background-color: ${colors.backgroundBlockCard};
  border-radius: 25px;
  padding: 31px 0px 31px 0px;
  @media (max-width: 768px){
    background-color: transparent;
    margin-top: 20px;
    padding: 0px;
  } 
`
// ----------------------------------------------------------------- //

function Home(){
  
  return (
  <StyledHome>
    <Banner backgroundImg={BannerHome} height={"110px"} title="Chez vous, partout et ailleurs"/>
    <StyledBlockCard>
        <Card />
    </StyledBlockCard>
  </StyledHome>)
}

export default Home