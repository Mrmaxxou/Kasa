import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

// CSS Header //
// ----------------------------------------------------------------- //

const StyledBlockCard = styled.div`
position: relative;
`

const StyledTitle = styled.h2`
bottom: 0;
margin: 0px 20px 45px 20px;
position: absolute;
color: ${colors.secondary};}
font-size: 18px;
font-weight: 500;
`

const Styledcover = styled.img`
width: 340px;
height: 340px;
border-radius: 10px;
object-fit: cover;
margin: 25px 0px 25px 0px;
@media (max-width: 768px){
    width: 335px;
    height: 255px;
  } 
`

// ----------------------------------------------------------------- //

function Card({title, cover}){
    return (
        <StyledBlockCard>
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