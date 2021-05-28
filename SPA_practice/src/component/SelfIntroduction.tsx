import React from 'react';
import styled from 'styled-components'
import testImg from '../test.jpg';

const SelfImage = styled.div`
    background-image: url(${testImg});
    margin: 1rem;
    width: 20rem;
    height: 20rem;
    background-repeat: no-repeat;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80rem;
`;

const StyledTitle = styled.h2`

`;

const StyledSelfIntroduce = styled.p`

`;

const SelfIntroduction = () => {
    return (
        <React.Fragment>
            <SelfImage/>
            <InnerWrapper>
                <StyledTitle>안녕하세요, 이정찬 입니다.</StyledTitle>
                <StyledSelfIntroduce>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledSelfIntroduce>
            </InnerWrapper>
        </React.Fragment>
    )
}

export default SelfIntroduction;