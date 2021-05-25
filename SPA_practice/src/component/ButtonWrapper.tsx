import React from 'react';
import styled from 'styled-components'
import NavButtons from './NavButtons'

const StyledWrapper = styled.div`
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 300px;
`;

const ButtonWrapper = () => {
    return (
        <React.Fragment>
            <StyledWrapper>
                <NavButtons/>
                <NavButtons/>
                <NavButtons/>
            </StyledWrapper>
        </React.Fragment>
    )
}

export default ButtonWrapper;