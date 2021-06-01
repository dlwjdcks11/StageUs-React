import React from 'react';
import styled from 'styled-components'
import { lighten, darken } from 'polished';

const StyledScrollButton = styled.button`
    width: 6rem;
    height: 4rem;
    background-color: #A593E0;
    color: #FFFFFF !important;
    transition: all 0.2s ease-in-out;
    border-radius: 0.6rem;
    border: 0;
    cursor: pointer;
    font-weight: 400;
    height: 2.85rem;
    line-height: 2.95rem;
    padding: 0 1.5rem;
    text-align: center;

    &:hover {
        background-color: ${ lighten(0.1, "#A593E0") };
        box-shadow: 0px 15px 20px rgba(178, 178, 178, 0.6);
        transform: translateY(-7px);
    };

    &:active {
        background-color: ${ darken(0.1, "#A593E0") };
        box-shadow: 0px 15px 20px rgba(178, 178, 178, 0.6);
        transform: translateY(7px);
    };
`;

const ScrollMoveButton = ():JSX.Element => {
    const clickHandler = ():void => {
        location.href="#nav";
    }

    return (
        <React.Fragment>
            <StyledScrollButton onClick={clickHandler}>클릭</StyledScrollButton>
        </React.Fragment>
    )
}

export default ScrollMoveButton;