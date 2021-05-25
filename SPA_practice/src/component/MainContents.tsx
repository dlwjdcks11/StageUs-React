import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
    width: 75rem;
`;

const StyledMainContents = styled.div`
    height: 50rem;
    padding: 3rem;
    width: 100%;
`;

const MainContents = () => {
    return (
        <React.Fragment>
            <StyledMainWrapper>
                <StyledMainContents>
                    asdfasdfasdfasdfasdf
                    <hr/>
                    asdfadfasfdadfasdfadfdf
                </StyledMainContents>
            </StyledMainWrapper>
        </React.Fragment>
    )
};

export default MainContents;