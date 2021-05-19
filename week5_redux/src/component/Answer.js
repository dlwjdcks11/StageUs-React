import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const AnswerSheet = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    font-size: 50px;
    margin-left: -120px;
    margin-top: -33px;
`;

const Answer = () => {
    const currentState = useSelector(state => state.current);

    return (
        <React.Fragment>
            {currentState ? <AnswerSheet>정답입니다!</AnswerSheet> : <AnswerSheet>숫자께-임</AnswerSheet>}
        </React.Fragment>
    );
}

export default Answer;