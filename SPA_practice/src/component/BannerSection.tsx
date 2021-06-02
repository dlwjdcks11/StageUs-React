import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import ScrollMoveButton from './ScrollMoveButton';
import theme from './theme';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledSection = styled.section`
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 0.8rem;
        height: 50vh;
    }
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 0.7rem;
        height: 50vh;
    }

    align-items: center;
    justify-content: center;
    background-color: #E0E3DA;
    border-top: 0;
    min-height: 100vh;
    height: 30em;
    width: 100%;
    position: relative;
    text-align: center;
    overflow: hidden;
    display: flex;
`;

const StyledBannerWrapper = styled.div`
    position: relative;
    width: 60rem;
`;

const StyledTitle = styled.h1`
    animation: ${fadeIn} 2s forwards;
`;

const StyledP = styled.p`
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 0.8rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 0.7rem;
    }
    color: #566270;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    opacity: 0;
    animation: ${fadeIn} 2s forwards 2s;
`;

const TempDiv = styled.div`
    height: 4em;
    background-color: #E0E3DA;
`;

const BannerSection = ():JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <StyledSection>
                <StyledBannerWrapper>
                    <StyledTitle>개발자 지망생 이정찬의 포트폴리오 사이트 입니다.</StyledTitle>
                    <StyledP>프로 개발자를 지향하는 사람의 React.js를 이용한 포트폴리오 사이트입니다.<br/>아래 버튼을 누르시면 즉시 메인 컨텐츠로 이동이 가능합니다.</StyledP>
                    <ScrollMoveButton/>
                </StyledBannerWrapper>
            </StyledSection>
            <TempDiv id="nav"/>
        </ThemeProvider>
    )
}

export default BannerSection;