import {Link} from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    padding-left: 57px;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    &:hover {
        text-decoration: underline;
        color: ${colors.primary};
    }
    @media (max-width: 768px){
        font-size: 12px;
        text-transform: uppercase;
        padding-left: 15px;
      }
`

export const StyledLink404 = styled(Link)`
    margin: 182px 0px 160px 0px;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    &:hover {
        text-decoration: underline;
        color: ${colors.primary};
    }
    @media (max-width: 768px){
        font-size: 14px;
      } 

`