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
`