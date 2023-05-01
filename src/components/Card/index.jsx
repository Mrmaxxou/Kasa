import styled from 'styled-components'
import colors from '../../utils/colors'

import DataLogements from '../../Datas/logements.json'
import {Link} from 'react-router-dom'

// CSS Header //
// ----------------------------------------------------------------- //

const StyledBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`
const StyledBlockCard = styled.div`
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    margin: 25px 0px 25px 0px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px ${colors.tertiary};
    }
    @media (max-width: 768px){
        width: 335px;
        height: 255px;
        margin: 10px 0px 10px 0px;
    } 
`
const StyledBackgroundCard = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
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
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    
    
`

// ----------------------------------------------------------------- //

function Card() {
    return (
        <StyledBlock>
            {DataLogements.map((data) => (
                <StyledBlockCard key={data.id}>
                    <Link to={{pathname: "/logement/", search: "?id=" + data.id}}>
                        <StyledBackgroundCard></StyledBackgroundCard>
                        <StyledTitle>{data.title}</StyledTitle>
                        <Styledcover src={data.cover} alt={data.title} />
                    </Link>
                </StyledBlockCard>
            ))}
        </StyledBlock>
    );
}

export default Card;