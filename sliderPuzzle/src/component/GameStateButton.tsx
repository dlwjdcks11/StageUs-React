import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { shuffle, start, correct, initialize } from '../action/index'
import { lighten } from 'polished';

interface customProps {
    buttonDistinguish:boolean,
}

const StyledStateButton = styled.button<customProps>`
    position: absolute;
    top: 80%;
    left: 50%;

    width: 120px;
    height: 45px;
    background-color: ${ lighten(0.1, "#4F86C6") };
    font-family: sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000000;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: ${ lighten(0.2, "#4F86C6") };
        box-shadow: 0px 15px 20px rgba(178, 178, 178, 0.6);
        color: #FFFFFF;
    }

    ${props => !props.buttonDistinguish && css`
        transform:translate(-125%, -50%);
    `};
    ${props => props.buttonDistinguish && css`
        transform:translate(25%, -50%);
    `};
    ${props => props.disabled && css`
        background-color: grey;
    `};
`;

const GameStateButton = ():JSX.Element => {
    const gameState:boolean = useSelector((state:any) => state.isStarted);
    const dispatch = useDispatch();

    document.getElementById('root').addEventListener("click", function(e:any):void {
        if (e.target.innerHTML === "시작") {
            dispatch(shuffle());
            dispatch(start(true));
            dispatch(correct(false));
        }
    })

    document.getElementById('root').addEventListener("click", function(e:any):void {
        if (e.target.innerHTML === "초기화") {
            dispatch(initialize());
            dispatch(correct(false));
        }
    })


    return (
        <React.Fragment>
            {gameState ? 
            <StyledStateButton buttonDistinguish={false} disabled>시작</StyledStateButton> 
            : <StyledStateButton buttonDistinguish={false}>시작</StyledStateButton>}
            {gameState ?
            <StyledStateButton buttonDistinguish={true}>초기화</StyledStateButton> 
            : <StyledStateButton buttonDistinguish={true} disabled>초기화</StyledStateButton>}
        </React.Fragment>
    );
}

export default GameStateButton;