import React from 'react';
import styled from 'styled-components'
import { lighten, darken } from 'polished';

const StyledDiv = styled.div`
    display: flex;
    margin: auto auto;

    width: 20rem;
    height: 10rem;
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const StyledHeader = styled.div`
    display: block;
`;

const StyledTitles = styled.h3`
    display: block;
    color: #E0E3DA;
    margin-top: 0;
`;

const StyledExplanation = styled.p`
    margin: 0 0 1rem 0;
    color: #E0E3DA;
    opacity: 0.8;
`;

const StyledButton = styled.button`
    width: 7rem;
    height: 2rem;

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

const StyledHr = styled.hr`
    margin: 1.5rem 0;
    background-color: #FFFFFF;
`;

const NavButtons = (props:any):JSX.Element => {
    const titles = ["자기소개", "경력", "나의 다짐"];
    const explanatations = ["나는 어떤 사람인가"
                            ,"나의 과거는 어땠는가"
                            ,"미래에 어떤 개발자가 될 것인가"];

    return (
        <React.Fragment>
            <StyledDiv>
                <StyledHeader>
                    <StyledTitles>{titles[props.index]}</StyledTitles>
                </StyledHeader>
                <StyledExplanation>{explanatations[props.index]}</StyledExplanation>
                <StyledButton onClick={props.onclick} id={props.index}>클릭</StyledButton>
            </StyledDiv>
            {props.index !== 2 ? <StyledHr/> : null}
        </React.Fragment>
    )
}

export default NavButtons;