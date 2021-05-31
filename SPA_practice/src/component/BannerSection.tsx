import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import ScrollMoveButton from './ScrollMoveButton';
import theme from './theme';

const StyledSection = styled.section`
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 0.8rem;
        height: 50vh;
    }
    
    align-items: center;
    justify-content: center;
    background-color: #E0E3DA;
    border-top: 0;
    min-height: 100vh;
    height: 100vh;
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

`;

const StyledP = styled.p`
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 0.8rem;
    }
    color: #566270;
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

const BannerSection = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledSection>
                <StyledBannerWrapper>
                    <StyledTitle>개발자 지망생 이정찬의 포트폴리오 사이트 입니다.</StyledTitle>
                    <StyledP>프로 개발자를 지향하는 사람의 React.js를 이용한 포트폴리오 사이트입니다.<br/>아래 버튼을 누르시면 즉시 메인 컨텐츠로 이동이 가능합니다.</StyledP>
                    <ScrollMoveButton/>
                </StyledBannerWrapper>
            </StyledSection>
        </ThemeProvider>
    )
}

export default BannerSection;