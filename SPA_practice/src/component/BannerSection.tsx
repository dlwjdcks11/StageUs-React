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
    width: 40rem;
`;

const StyledTitle = styled.h1`

`;

const StyledP = styled.p`
    color: rgba(255, 255, 255, 0.65);
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

const BannerSection = () => {
    return (
        <React.Fragment>
            <StyledSection>
                <StyledBannerWrapper>
                    <StyledTitle>Lorem Ipsum</StyledTitle>
                    <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</StyledP>
                    <ScrollMoveLink/>
                </StyledBannerWrapper>
            </StyledSection>
        </React.Fragment>
    )
}

export default BannerSection;