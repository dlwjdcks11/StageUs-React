import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const AnswerSheet = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    font-size: 50px;
    font-family: '궁서';
    transform:translate(-50%, -50%);
`;

const Answer = () => {
    const currentState = useSelector(state => state.current);

    return (
        <React.Fragment>
            {currentState ? <AnswerSheet>끗ㅡ</AnswerSheet> : <AnswerSheet>숫자께-임</AnswerSheet>}
        </React.Fragment>
    );
}

export default Answer;