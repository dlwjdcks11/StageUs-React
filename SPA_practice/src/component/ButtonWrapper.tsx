import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import NavButtons from './NavButtons'
import { useDispatch } from 'react-redux';
import { change } from '../action/index';
import theme from './theme';
import backgroundImg from '../background.png';

const StyledWrapper = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        height: 100vh;
        flex-direction: column;
    }

    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed; 
    width: 100%;
    height: 25vh;
    display: flex;
`;

const ButtonWrapper = () => {
    const arr = [0, 1, 2];
    const dispatch = useDispatch();
    
    const clickHandler = (e) => {
        switch(e.target.id) {
            case "0":
                location.href="#contents";
                dispatch(change(0));
                break;
            case "1":
                location.href="#contents";
                dispatch(change(1));
                break;
            case "2":
                location.href="#contents";
                dispatch(change(2));
                break;
            default:
                break;
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledWrapper id="nav">
                {arr.map((val, idx) => {
                    return <NavButtons onclick={clickHandler}
                            key={idx}
                            index={val}/>
                })}
            </StyledWrapper>
        </ThemeProvider>
    )
}

export default ButtonWrapper;