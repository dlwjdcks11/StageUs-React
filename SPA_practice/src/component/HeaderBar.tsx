import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { spawn } from '../action/index';

const StyledHeader = styled.header`
    background: rgba(0, 0, 0, 0.5);
    color: #a6a6a6;
    cursor: default;
    height: 3.25em;
    left: 0;
    top: 0;
    line-height: 3.25em;
    position: fixed;
    text-align: left;
    width: 100%;
    z-index: 1000;

    font-size: 1.25rem;
    color: #FFFFFF;
    padding-left:0.8rem;

    transition: transform 0.4s;
`;

const HeaderBar = () => {
    const spawnFlag = useSelector((state:any) => state.spawnable);
    const dispatch = useDispatch();

    const handleScroll = () => {
        const val = Math.floor(window.pageYOffset);
        dispatch(spawn(val));
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <React.Fragment>
            {spawnFlag > 924 ? <StyledHeader>왈랄랄루</StyledHeader> : null}
        </React.Fragment>
    )
}

export default HeaderBar;