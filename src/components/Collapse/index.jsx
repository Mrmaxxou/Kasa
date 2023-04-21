import React, {useState, useEffect} from "react";


import styled from 'styled-components'
import IconCollapse from '../../assets/arrow_back_ios.svg'

import colors from '../../utils/style/colors'

// CSS Collapse //

// ----------------------------------------------------------------- //

const StyledBlockAbout = styled.section`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0px 0px 0px 0px;
    @media (max-width: 768px){
        margin: 20px 0px 0px 0px;
        width: 100%;
      } 
`
const StyledCollapseTitled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${colors.primary};
    border-radius: 5px;
`

const StyledTexth3 = styled.h3`
    font-size: 24px;
    font-weight: 500;
    color: ${colors.secondary};
    margin: 7px 0px 7px 18px;
    @media (max-width: 768px){
        font-size: 13px;
      } 

`

const Styledimg = styled.img`
    margin: 8px 17px 0px 0px;
    width: 1.3em;
    filter: invert(87%) sepia(99%) saturate(0%) hue-rotate(183deg) brightness(200%) contrast(97%);
    rotate: 90deg;
    cursor: pointer;
    transform: ${({collapsed}) => (collapsed? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0,2s ease-in-out;
`

const StyledBackgroundText = styled.div`
    background-color: ${colors.backgroundBlockCard};
    margin: 0px 0px 31px 0px;
    border-radius: 5px;
    overflow: hidden;
    max-height: ${({collapsed}) => (collapsed? '0px' : '1000px')};
    transition: max-height 0,6s ease-in-out;
    @media (max-width: 768px){
        margin: 0px 0px 0px 0px;
      } 
`

const StyledText = styled.p`
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 400;
    margin: 0px 18px 0px 18px;
    padding: 36px 0px 20px 0px;
    @media (max-width: 768px){
        font-size: 12px;
        line-height: 17px;
        padding: 17px 0px 39px 0px;
      } 

`

// ----------------------------------------------------------------- //

function Collapse({title, text}){
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.tagName === 'img') {
                setCollapsed(true);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, []);

    return (
        <StyledBlockAbout>
            <StyledCollapseTitled>
                <StyledTexth3>{title}</StyledTexth3>
                <Styledimg 
                    src={IconCollapse} 
                    alt="Icone déplit-replis" 
                    onClick={handleClick}
                    collapsed={collapsed}
                />
            </StyledCollapseTitled>
            <StyledBackgroundText collapsed={collapsed}>
                <StyledText>{text}</StyledText>
            </StyledBackgroundText>
        </StyledBlockAbout>
    );
}

export default Collapse;