import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    margin: auto auto;
    background-color: red;
`;

const StyledButton = styled.button`
    
`;

const NavButtons = () => {
    return (
        <React.Fragment>
            <StyledDiv>
                <StyledButton>왈랄랄루</StyledButton>
            </StyledDiv>
        </React.Fragment>
    )
}

export default NavButtons;