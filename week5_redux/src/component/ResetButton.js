import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { initialize, correct } from '../action/index'
import { lighten } from 'polished';

const StyledResetButton = styled.button`
    position: absolute;
    top: 80%;
    left: 50%;
    transform:translate(25%, -50%);
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