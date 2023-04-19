import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

// CSS Header //
// ----------------------------------------------------------------- //

const StyledBlockCard = styled.div`
position: relative;
margin: 25px 0px 25px 0px;
`

const StyledBackgroundCard = styled.div`
position: absolute;
bottom: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
height: 100%;
width: 100%;
z-index: 1;
border-radius: 10px;
`

const StyledTitle = styled.h2`
position: absolute;
bottom: 15px;
margin: 0px 20px 0px 10px;
position: absolute;
color: ${colors.secondary};}
font-size: 18px;
font-weight: 500;
z-index: 1;
`

const Styledcover = styled.img`
width: 340px;
height: 340px;
position: relative;
border-radius: 10px;
object-fit: cover;
@media (max-width: 768px){
    width: 335px;
    height: 255px;
  } 
`

// ----------------------------------------------------------------- //

function Card({title, cover}){
    return (
        <StyledBlockCard>
            <StyledBackgroundCard></StyledBackgroundCard>
            <StyledTitle>{title}</StyledTitle>
            
            <Styledcover src={cover} alt={title}/>
        </StyledBlockCard>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Card;