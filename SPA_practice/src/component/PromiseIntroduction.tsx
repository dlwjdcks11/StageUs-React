import React from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components'
import githubIcon from '../images/33449752.png'
import theme from './theme'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-3.25em);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
`;

const InnerContents = styled.article`
    opacity: 0;

    ${(props:any) => {
        return css`
        animation-name: ${fadeIn};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: ${props.id + "s"};
        animation-timing-function: linear;
        `;
    }}
`;

const Title = styled.h2`
    color: #566270;
`;

const StyledLine = styled.hr`
    width: 100%;
`;

const GitHubWrapper = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        flex-direction: column;
    }
    margin-bottom: 1rem;
    display: flex;
`;

const GithubProfile = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        flex-direction: column;
        margin: auto;
    }

    background-image: url(${githubIcon});
    background-size: contain;
    background-repeat: no-repeat;
    
    margin-top: 1rem;
    margin-right: 1rem;
    width: 5rem;
    height: 5rem;
`;

const GithubAPI = styled.img`
    
`;

const PromiseIntroduction = ():JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <StyledWrapper>
                <InnerContents id="0">
                    <Title>나의 다짐</Title>
                    <StyledLine/>
                    조금 더 능력있는 개발자가 되고 싶다. 디자인 센스가 너무 없지만, 열심히 공부해서 디자인도 잘 하는 개발자가 되고 싶다.<br/>
                    1일 1커밋을 1년동안 지켜나갈 수 있는 개발자가 되고 싶다. 방학때는 1일 1백준까지 철저하게 지켜나갈 것이다.<br/>
                    누군가가 필요로 하는 개발자가 될 것이다.<br/>
                </InnerContents>
                <InnerContents id="1">
                    <Title>앞으로 해나가야 할 일</Title>
                    <StyledLine/>
                    1. 귀찮아 하지 않고 매일 개발하고, 1일 1커밋 실천하기<br/>
                    2. 프로그래밍 기조 따라가려고 노력하기<br/>
                    3. 알고리즘 문제를 조금 더 깊이 풀어보기<br/>
                </InnerContents>
                <InnerContents id="2">
                    <Title>Github contributions calendar</Title>
                    <StyledLine/>
                    <GitHubWrapper>
                        <GithubProfile/>
                        <GithubAPI src="https://ghchart.rshah.org/dlwjdcks11"/>
                    </GitHubWrapper>
                    <b>잔디심기를 완료하는 그날까지!</b>
                </InnerContents>
                </StyledWrapper>
        </ThemeProvider>
    )
}

export default PromiseIntroduction;