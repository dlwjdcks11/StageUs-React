import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import SelfIntroduction from './SelfIntroduction';
import CareerIntroduction from './CareerIntroduction';
import PromiseIntroduction from './PromiseIntroduction';
import theme from './theme';

const StyledMainWrapper = styled.article`
    @media ${({ theme }) => theme.device.tablet} {
        height: 100vh;
        flex-direction: column;
    }

    display: flex;
    width: 100%;
    background-color: #FFFFF3;
    height: 55rem;
    flex-direction: column;
`;

const MainContents = ():JSX.Element => {
    const flag = useSelector((state:any) => state.value);
    const dateArray:string[] = ["2017.03", "2017.03", "2017.04", "2017.08", "2018.08", "2020.03", "2021.01", "2021.06", "2021.06"];
    const careerArray:string[] = ["인하대학교 입학", 
                                    "IGRUS 가입",
                                    "Sk Sunny 참가", 
                                    "인하대학교 해커톤 참가", 
                                    "카카오게임즈 웹 게임 경진대회 참가", 
                                    "육군 만기전역", 
                                    "인하대학교 HCI 연구실 가짜전문가(머신러닝, 딥러닝)과정 수료", 
                                    "StageUs 웹 프론트엔드 과정 수료",
                                    "Unreal Engine 4를 이용하여 게임 <썸띵편의점> 개발"]

    
    return (
        <ThemeProvider theme={theme}>
            <StyledMainWrapper id="contents">
                {flag === 0 ? <SelfIntroduction/> : null}
                {flag === 1 ? dateArray.map ((val, idx) => {
                    return <CareerIntroduction 
                            key={idx} 
                            date={val} 
                            carrer={careerArray[idx]}
                            animationDelay={(idx + 1) * 0.1}/>
                }) : null}
                {flag === 2 ? <PromiseIntroduction/> : null}
            </StyledMainWrapper>
        </ThemeProvider>
    )
};

export default MainContents;