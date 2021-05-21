import React from "react";
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { useSelector } from 'react-redux';

interface customProps {
    backgroundColor:string,
    gradation:number
}

const StyledNumberButton = styled.button<customProps>`    
    ${(props:any) => {
        const backColor:string = props.backgroundColor || 'white';
        const gradConcentration:number = props.gradation || 0;
    
        return css`
            background-color: ${ lighten(gradConcentration, backColor) };
            border-color: ${ lighten(0.15, backColor) };
            height: 4rem;
            width: 4rem;
            font-size: 1.5rem;
            border-radius: 0.8rem;
            cursor: pointer;
            font-family: sans-serif;
            
            font-weight: 500;
            border: none;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease 0s;
            cursor: pointer;

            &:hover {
                background-color: ${ lighten(gradConcentration + 0.01, backColor) };
                box-shadow: 0px 15px 20px rgba(178, 178, 178, 0.6);
                color: #B2B2B2;
                transform: translateY(-7px);
            }
        `;
    }}
`;

const StyledDiv = styled.div`
    display: flex;
    margin: auto auto;
`;

const Button = (props:any):JSX.Element => {
    const gameState:boolean = useSelector((state:any) => state.isStarted); 

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

export default Button;