import React from 'react';
import styled from 'styled-components'
import NavButtons from './NavButtons'
import { useDispatch } from 'react-redux';
import { change } from '../action/index';

const StyledWrapper = styled.div`
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 300px;
`;

const ButtonWrapper = () => {
    const arr = [0, 1, 2];
    const dispatch = useDispatch();
    
    const clickHandler = (e) => {
        switch(e.target.id) {
            case "0":
                dispatch(change(0));
                break;
            case "1":
                dispatch(change(1));
                break;
            case "2":
                dispatch(change(2));
                break;
            default:
                break;
        }
    }

    return (
        <React.Fragment>
            <StyledWrapper>
                {arr.map((val, idx) => {
                    return <NavButtons onclick={clickHandler}
                            key={idx}
                            index={val}/>
                })}
            </StyledWrapper>
        </React.Fragment>
    )
}

export default ButtonWrapper;