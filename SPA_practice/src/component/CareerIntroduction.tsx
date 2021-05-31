import React from 'react';
import styled from 'styled-components'
import theme from './theme';

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 1rem 1rem;
`;

const Title = styled.h1`
    margin-top: 0;
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
                <Title>약력</Title>
                <StyledCareerTitle>2017.03</StyledCareerTitle>
                <StyledP>인하대학교 입학</StyledP>
                <StyledCareerTitle>2017.03</StyledCareerTitle>
                <StyledP>IGRUS 가입</StyledP>
                <StyledCareerTitle>2017.04</StyledCareerTitle>
                <StyledP>Sk Sunny 참가</StyledP>
                <StyledCareerTitle>2017.08</StyledCareerTitle>
                <StyledP>인하대학교 해커톤 참가</StyledP>
                <StyledCareerTitle>2018.08</StyledCareerTitle>
                <StyledP>카카오게임즈 웹 게임 경진대회 참가</StyledP>
                <StyledCareerTitle>2020.03</StyledCareerTitle>
                <StyledP>육군 만기전역</StyledP>
                <StyledCareerTitle>2021.01</StyledCareerTitle>
                <StyledP>인하대학교 HCI 연구실 가짜전문가(머신러닝, 딥러닝)과정 수료</StyledP>
                <StyledCareerTitle>2021.06</StyledCareerTitle>
                <StyledP>StageUs 웹 프론트엔드 과정 수료</StyledP>
            </StyledArticle>
        </React.Fragment>
    )
}

export default CareerIntroduction;