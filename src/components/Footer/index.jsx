import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from '../../assets/Logo.png'

// CSS Footer //
// ----------------------------------------------------------------- //

const StyledFooter = styled.footer`
display: flex;
background-color: ${colors.tertiary};
align-items: center;
flex-direction: column;
`

const StyledText = styled.p`
color: ${colors.secondary};
`

const StyledLogo = styled.img`
width: 122px;
margin: 66px 0px 15px 0px;
filter: invert(87%) sepia(99%) saturate(0%) hue-rotate(183deg) brightness(200%) contrast(97%);
`

// ----------------------------------------------------------------- //

function Footer() {
     return (
        <StyledFooter>
            <StyledLogo src={Logo} alt="Logo société Kasa"/>
            <StyledText> © 2020 Kasa. All rights reserved</StyledText>
        </StyledFooter>
     )
}

export default Footer