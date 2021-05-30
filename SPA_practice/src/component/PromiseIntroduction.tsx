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
                    조금 더 능력있는 웹 개발자가 되고 싶다. 디자인 센스가 너무 없지만, 열심히 공부해서 디자인도 잘 하는 개발자가 되고 싶다.
                </InnerWrapper>
                <InnerWrapper>
                    장래 희망
                    <StyledLine/>
                    대기업을 뚫고 고액 연봉을 받고 사는게 꿈이다.
                </InnerWrapper>
            </StyledArticle>
        </React.Fragment>
    )
}

export default PromiseIntroduction;