import React from 'react';
import styled from 'styled-components'

const StyledScrollButton = styled.button`
    width: 4rem;
    height: 4rem;
    background-color: yellow;
`;

const ScrollMoveButton = () => {
    return (
        <React.Fragment>
            <StyledScrollButton>클릭해</StyledScrollButton>
        </React.Fragment>
    )
}

export default ScrollMoveButton;