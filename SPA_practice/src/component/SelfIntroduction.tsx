import React from 'react';
import styled from 'styled-components'
import testImg from '../test.jpg';

const SelfImage = styled.div`
    background-image: url(${testImg});
    background-size: contain;
    margin: 1rem;
    width: 30rem;
    height: 10rem;
    background-repeat: no-repeat;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80rem;
`;

const StyledTitle = styled.h2`

`;

const ContactInfo = styled.h3`
    
`;

const StyledSelfIntroduce = styled.p`

`;

const SelfIntroduction = () => {
    return (
        <React.Fragment>
            <SelfImage/>
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
                    머신러닝: python, pytorch<br/>
                    게임 개발: Unreal Engine 4, Unity Engine<br/>
                    데이터베이스 구축: MySQL, PostgreSQL<br/>
                </StyledSelfIntroduce>
            </InnerWrapper>
        </React.Fragment>
    )
}

export default SelfIntroduction;