import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import profileImg from '../profile.jpg';
import theme from './theme'

const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgWrapper = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        width: 20rem;
        height: 20rem;
    }
    width: 37rem;
    height: 28rem;
    margin: auto;
`;

const SelfImage = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        width: 100%;
        height: 15rem;
    }
    background-image: url(${profileImg});
    background-size: contain;
    background-repeat: no-repeat;
    height: 28rem;
    border-radius: 1.2rem;
    box-shadow: 0rem 0rem 1.2rem #cccccc;
`;

const InnerWrapper = styled.div`
    width: 90%;
`;

const StyledTitle = styled.h2`
    margin-top: 0;
`;

const ContactInfo = styled.h3`
    width: 100%;
`;

const StyledSelfIntroduce = styled.p`
    width: 100%;
`;

const SelfIntroduction = () => {
    return (
        <ThemeProvider theme={theme}>
            <OuterWrapper>
                <ImgWrapper>
                    <SelfImage/>
                </ImgWrapper>
                <InnerWrapper>
                    <StyledTitle>
                        안녕하세요, 이정찬 입니다.
                    </StyledTitle>
                    <ContactInfo>
                        이메일: dlwjdcks7356@gmail.com<br/>
                        카카오톡: sesame63<br/>
                        Github: https://github.com/dlwjdcks11<br/>
                    </ContactInfo>
                    <StyledSelfIntroduce>
                        인하대학교 컴퓨터공학과 3학년 재학, IGRUS 3년차<br/><br/>
                        <b>기술스택</b><br/>
                        자료구조, 알고리즘 구현: C++, python<br/>
                        웹 개발: HTML, CSS, JS, React.js, node.js, Bootstrap, JQuery<br/>
                        머신러닝: python, pytorch library, sklearn library<br/>
                        게임 개발: Unreal Engine 4, Unity Engine<br/>
                        데이터베이스 구축: MySQL, PostgreSQL<br/>
                    </StyledSelfIntroduce>
                </InnerWrapper>
            </OuterWrapper>
        </ThemeProvider>
    )
}

export default SelfIntroduction;