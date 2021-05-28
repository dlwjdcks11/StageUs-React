import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SelfIntroduction from './SelfIntroduction';
import CareerIntroduction from './CareerIntroduction';
import PromiseIntroduction from './PromiseIntroduction';

const StyledMainWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #FFFFF3;
`;

const MainContents = () => {
    const flag = useSelector((state:any) => state.value);
    
    return (
        <React.Fragment>
            <StyledMainWrapper>
                {flag === 0 ? <SelfIntroduction/> : null}
                {flag === 1 ? <CareerIntroduction/> : null}
                {flag === 2 ? <PromiseIntroduction/> : null}
            </StyledMainWrapper>
        </React.Fragment>
    )
};

export default MainContents;