import React from 'react';
import BannerTitre from '../../components/Banner'

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
  margin-top: 40px;
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
    <BannerTitre />
    <StyledBlockCard>
        <Card />
    </StyledBlockCard>
  </StyledHome>)
}

export default Home