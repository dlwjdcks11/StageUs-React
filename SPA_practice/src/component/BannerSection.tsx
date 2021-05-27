import React from 'react';
import styled from 'styled-components'
import ScrollMoveButton from './ScrollMoveButton';

const StyledSection = styled.section`
    justify-content: center;
    background-color: grey;
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
    
`;

const StyledTitle = styled.h1`
    display: inline;
`;

const BannerSection = () => {
    return (
        <React.Fragment>
            <StyledSection>
                <StyledTitle>Lorem Ipsum</StyledTitle>
                <ScrollMoveButton/>
            </StyledSection>
        </React.Fragment>
    )
}

export default BannerSection;