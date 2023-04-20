import {BannerAbout }from '../../components/Banner'

import styled from 'styled-components'

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 70px 100px 30px 100px;
  @media (max-width: 768px){
    margin: 16px 20px 22px 20px;
  } 

`


function About(){
    return (
        <StyledAbout>
            <BannerAbout/>
        </StyledAbout>
    )

}

export default About