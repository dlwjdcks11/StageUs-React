import React from 'react';
import styled from 'styled-components'
import ScrollMoveButton from './ScrollMoveButton';

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
`;

const HeaderBar = () => {
    return (
        <React.Fragment>
            <StyledHeader>왈랄랄루</StyledHeader>
        </React.Fragment>
    )
}

export default HeaderBar;