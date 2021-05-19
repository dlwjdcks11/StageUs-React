import React from "react";
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { useSelector } from 'react-redux';

const StyledNumberButton = styled.button`
    height: 60px;
    width: 60px;
    font-size: 25px;
    border-radius: 8px;
    
    ${props => {
        const backColor = props.backgroundColor || 'white';
        const gradConcentration = props.gradation || 0;
    
        return css`
            background-color: ${ lighten(gradConcentration, backColor) };
        `;
    }}
`;

const StyledDiv = styled.div`
    display: flex;
    margin: auto auto;
`;

const Button = (props) => {
    const gameState = useSelector(state => state.isStarted); 
    console.log(props.backColor);

    return (
        <React.Fragment>
            <StyledDiv id={props.index}>
                {gameState ? 
                <StyledNumberButton onClick={props.onclick} backgroundColor={props.backColor} gradation={props.grad}>{props.num}</StyledNumberButton> 
                : <StyledNumberButton onClick={props.onclick} backgroundColor={props.backColor} gradation={props.grad} disabled>{props.num}</StyledNumberButton>}
            </StyledDiv>
        </React.Fragment>
    );
};

// const Button = (state) => {
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <button onClick={() => dispatch(increment())}>증가</button>
//             <button onClick={() => dispatch(decrement())}>감소</button>
//         </div>
//     );
// }

export default Button;