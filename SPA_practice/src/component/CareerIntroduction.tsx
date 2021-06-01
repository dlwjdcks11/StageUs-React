import React from 'react';
import styled, { css, keyframes } from 'styled-components'

interface customProps {
    delay: number
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-3.25em);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const StyledArticle = styled.article<customProps>`
    margin: 1rem 1rem 0 1rem;
    opacity: 0;

    ${(props:any) => {
        return css`
        animation-name: ${fadeIn};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: ${props.delay + "s"};
        `;
    }}
`;

const StyledCareerTitle = styled.h3`
    margin-top: 0;
`;

const StyledP = styled.p`
    margin-top: 0;
`;

const CareerIntroduction = (props:any):JSX.Element => {
    return (
        <React.Fragment>
            <StyledArticle delay={props.animationDelay}>
                <StyledCareerTitle>{props.date}</StyledCareerTitle>
                <StyledP>{props.carrer}</StyledP>
            </StyledArticle>
        </React.Fragment>
    )
}

export default CareerIntroduction;