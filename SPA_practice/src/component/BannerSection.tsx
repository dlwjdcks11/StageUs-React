import React from 'react';
import styled from 'styled-components'
import ScrollMoveLink from './ScrollMoveLink';

const StyledSection = styled.section`
    justify-content: center;
    background-color: #E0E3DA;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top: 0;
    min-height: 100vh;
    height: 100vh !important;
    width: 100%;
    position: relative;
    text-align: center;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

const StyledBannerWrapper = styled.div`
    position: relative;
    width: 60rem;
`;

const StyledTitle = styled.h1`

`;

const StyledP = styled.p`
    color: #566270;
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

const BannerSection = () => {
    return (
        <React.Fragment>
            <StyledSection>
                <StyledBannerWrapper>
                    <StyledTitle>개발자 지망생 이정찬의 포트폴리오 사이트 입니다.</StyledTitle>
                    <StyledP>프로 개발자를 지향하는 사람의 React.js를 이용한 포트폴리오 사이트입니다.<br/>아래 버튼을 누르시면 즉시 메인 컨텐츠로 이동이 가능합니다.</StyledP>
                    <ScrollMoveLink/>
                </StyledBannerWrapper>
            </StyledSection>
        </React.Fragment>
    )
}

export default BannerSection;