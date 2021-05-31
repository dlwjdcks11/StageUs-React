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
    height: 53.75rem;
`;

const MainContents = () => {
    const flag = useSelector((state:any) => state.value);
    
    return (
        <ThemeProvider theme={theme}>
            <StyledMainWrapper id="contents">
                {flag === 0 ? <SelfIntroduction/> : null}
                {flag === 1 ? <CareerIntroduction/> : null}
                {flag === 2 ? <PromiseIntroduction/> : null}
            </StyledMainWrapper>
        </ThemeProvider>
    )
};

export default MainContents;