import React from 'react';
import styled from 'styled-components'

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 1rem 1rem;
`;

const StyledCareerTitle = styled.h3`
    margin-top: 0;
`;

const StyledP = styled.p`
    margin-top: 0;
`;

const CareerIntroduction = () => {
    return (
        <React.Fragment>
            <StyledArticle>
                <StyledCareerTitle>2017.03.02</StyledCareerTitle>
                <StyledP>인하대학교 입학</StyledP>
                <StyledCareerTitle>2017.03.02</StyledCareerTitle>
                <StyledP>또뭘했지</StyledP>
                <StyledCareerTitle>2017.03.02</StyledCareerTitle>
                <StyledP>또뭐했지</StyledP>
                <StyledCareerTitle>2017.03.02</StyledCareerTitle>
                <StyledP>또뭐했냐고</StyledP>
            </StyledArticle>
        </React.Fragment>
    )
}

export default CareerIntroduction;