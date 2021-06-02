import React from 'react';
import styled, { keyframes, css, ThemeProvider } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { spawn } from '../action/index';
import theme from './theme'

interface customProps {
    isViewable: boolean
};

const fadeIn = keyframes`
    from {
        transform: translateY(-3.25em);
    }
    to {
        transform: translateY(0);
    }
`;

const StyledHeader = styled.header<customProps>`
    @media ${({ theme }) => theme.device.tablet} {
        width: 100%;
    }
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 0.9rem;
    }
    font-family: inherit;
    color: #a6a6a6;
    cursor: default;
    height: 3.25em;
    line-height: 3.25em;
    text-align: left;
    width: 100%;
    z-index: 1000;
    font-size: 1.25rem;
    color: #FFFFFF;

    ${(props:any) => {
        if (props.isViewable) {
            return css `
                background: rgba(0, 0, 0, 0.5);
                position: fixed;
                
                animation: ${fadeIn} 0.3s linear;
            `;
        }
        else {
            return css `
                background: #566270;
                text-align: left;
            `;
        }
    }};
`;

const HeaderContents = styled.div`
    margin-left: 1rem;
    font-weight: 300;
`;

const FixedHeaderBar = ():JSX.Element => {
    const spawnFlag:number = useSelector((state:any) => state.spawnable);
    const dispatch:any = useDispatch();

    const handleScroll = ():void => {
        const val:number = Math.floor(window.pageYOffset);
        dispatch(spawn(val));
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <ThemeProvider theme={theme}>
            {spawnFlag > 800 ? 
            <StyledHeader isViewable={true}><HeaderContents>개발자를 꿈꾸는 사람의 공간</HeaderContents></StyledHeader> :
            <StyledHeader isViewable={false}><HeaderContents>개발자를 꿈꾸는 사람의 공간</HeaderContents></StyledHeader>}
        </ThemeProvider>
    )
}

export default FixedHeaderBar;