import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { initialize, correct } from '../action/index'

const StyledResetButton = styled.button`
    position: absolute;
    top: 80%;
    left: 56%;
`;

const ResetButton = () => {
    const gameState = useSelector(state => state.isStarted);
    const dispatch = useDispatch();

    document.getElementById('root').addEventListener("click", function(e) {
        if (e.target.innerHTML === "초기화") {
            dispatch(initialize());
            dispatch(correct(false));
        }
    })

    return (
        <React.Fragment>
            {gameState ? <StyledResetButton>초기화</StyledResetButton> : <StyledResetButton disabled>초기화</StyledResetButton>}
        </React.Fragment>
    );
}

export default ResetButton;