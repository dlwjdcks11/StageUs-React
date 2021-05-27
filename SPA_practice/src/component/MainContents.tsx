import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledMainWrapper = styled.div`
    width: 75rem;
`;

const StyledMainContents = styled.div`
    height: 50rem;
    padding: 3rem;
    width: 100%;
`;


/* <StyledMainContents>
asdfasdfasdfasdfasdf
<hr/>
asdfadfasfdadfasdfadfdf
</StyledMainContents>
 */

const MainContents = () => {
    const flag = useSelector((state:any) => state.value);
    
    return (
        <React.Fragment>
            <StyledMainWrapper>
                {flag === 0 ? <StyledMainContents>asdf<hr/>asdf</StyledMainContents> : null}
                {flag === 1 ? <StyledMainContents>zxcv<hr/>zxcv</StyledMainContents> : null}
                {flag === 2 ? <StyledMainContents>qwer<hr/>qwer</StyledMainContents> : null}
            </StyledMainWrapper>
        </React.Fragment>
    )
};

export default MainContents;