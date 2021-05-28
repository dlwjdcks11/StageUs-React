import React from 'react';
import styled from 'styled-components'

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 100%;
`;

const InnerWrapper = styled.div`
    margin-bottom: 2rem;
`;

const StyledLine = styled.hr`

`;

const PromiseIntroduction = () => {
    return (
        <React.Fragment>
            <StyledArticle>
                <InnerWrapper>
                    나의 다짐
                    <StyledLine/>
                    왈랄랄루
                </InnerWrapper>
                <InnerWrapper>
                    나의 다짐
                    <StyledLine/>
                    왈랄랄루
                </InnerWrapper>
            </StyledArticle>
        </React.Fragment>
    )
}

export default PromiseIntroduction;