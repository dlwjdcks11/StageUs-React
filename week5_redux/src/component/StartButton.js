import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { shuffle, start, correct } from '../action/index'

const StyledStartButton = styled.button`
    position: absolute;
    top: 80%;
    left: 40%;
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