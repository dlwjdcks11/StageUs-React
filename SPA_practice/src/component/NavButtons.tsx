import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    margin: auto auto;
    background-color: red;
`;

const StyledButton = styled.button`
    
`;

const NavButtons = (props) => {
    return (
        <React.Fragment>
            <StyledDiv>
                <StyledButton onClick={props.onclick} id={props.index}>왈랄랄루</StyledButton>
            </StyledDiv>
        </React.Fragment>
    )
}

export default NavButtons;