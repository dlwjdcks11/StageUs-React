import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    margin: auto auto;

    width: 20rem;
    height: 10rem;
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledHeader = styled.header`
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
    display: block;
    width: 5rem;
    height: 2rem;
`;

const StyledHr = styled.hr`
    margin: 1.5rem 0;
    background-color: #FFFFFF;
`;

const NavButtons = (props) => {
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
                <StyledButton onClick={props.onclick} id={props.index}>Click me!</StyledButton>
            </StyledDiv>
            {props.index !== 2 ? <StyledHr/> : null}
        </React.Fragment>
    )
}

export default NavButtons;