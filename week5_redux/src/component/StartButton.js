import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { shuffle, start, correct } from '../action/index'
import { lighten } from 'polished';

const StyledStartButton = styled.button`
    position: absolute;
    top: 80%;
    left: 50%;
    transform:translate(-125%, -50%);
    background-color: ${ lighten(0.1, "#4F86C6") };

    width: 120px;
    height: 45px;
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
`;

const StartButton = () => {
    const gameState = useSelector(state => state.isStarted);
    const dispatch = useDispatch();

    document.getElementById('root').addEventListener("click", function(e) {
        if (e.target.innerHTML === "시작") {
            dispatch(shuffle());
            dispatch(start(true));
            dispatch(correct(false));
        }
    })

    return (
        <React.Fragment>
            {gameState ? <StyledStartButton disabled>시작</StyledStartButton> : <StyledStartButton>시작</StyledStartButton>}
        </React.Fragment>
    );
}

export default StartButton;