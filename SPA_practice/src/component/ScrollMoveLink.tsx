import React from 'react';
import styled from 'styled-components'

const StyledScrollLink = styled.a`
    width: 4rem;
    height: 4rem;
    background-color: #A593E0;
    color: #FFFFFF !important;
    
    transition: all 2s ease-in-out 1s;
    border-radius: 0.6rem;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    height: 2.85rem;
    line-height: 2.95rem;
    padding: 0 1.5rem;
    text-align: center;
    text-decoration: none;
`;

const ScrollMoveLink = () => {
    return (
        <React.Fragment>
            <StyledScrollLink href="#nav">클릭</StyledScrollLink>
        </React.Fragment>
    )
}

export default ScrollMoveLink;