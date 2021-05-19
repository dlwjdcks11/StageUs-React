import { useSelector, useDispatch } from 'react-redux';
import { change, correct, start } from '../action/index'
import styled from 'styled-components';
import Button from './Button'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
`;

const NumberGame = () => {
    const forMapArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    const compare = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":" "};
    const color = ["red", "blue", "green", "grey"];
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        let clickedPosition = e.target.parentNode.id;
        let blank = -1;
        let nearPosition = [-1, -1, -1, -1];
            
        for (let i of forMapArr) {
            if (data.numbers[i] === ' ') {
                blank = parseInt(i);
                nearPosition[0] = (parseInt(i) < 5) ? -1 : (parseInt(i) - 4); // 상
                nearPosition[1] = (parseInt(i) > 12) ? -1 : (parseInt(i) + 4); // 하
                nearPosition[2] = (parseInt(i) % 4 === 1) ? -1 : (parseInt(i) - 1); // 좌
                nearPosition[3] = (parseInt(i) % 4 === 0) ? -1 : (parseInt(i) + 1); // 우
            }
        }   

        for (let i of nearPosition) {
            if (i === parseInt(clickedPosition)) {
                dispatch(change(String(i), String(blank)));

                if (JSON.stringify(data.numbers) === JSON.stringify(compare)) {
                    dispatch(correct(true));
                    dispatch(start(false));
                }
                break;
            }
        }
    }

    // document.getElementById('root').addEventListener("click", function(e) {
    //     if (e.target.className === 'numBtn') {
    //         let clickedPosition = e.target.parentNode.id;
    //         let blank = -1;
    //         let nearPosition = [-1, -1, -1, -1];
    //
    //         for (let i of forMapArr) {
    //             if (data.numbers[i] === ' ') {
    //                 blank = parseInt(i);
    //                 nearPosition[0] = (parseInt(i) < 5) ? -1 : (parseInt(i) - 4); // 상
    //                 nearPosition[1] = (parseInt(i) > 12) ? -1 : (parseInt(i) + 4); // 하
    //                 nearPosition[2] = (parseInt(i) % 4 === 1) ? -1 : (parseInt(i) - 1); // 좌
    //                 nearPosition[3] = (parseInt(i) % 4 === 0) ? -1 : (parseInt(i) + 1); // 우
    //             }
    //         }
    //
    //         for (let i of nearPosition) {
    //             if (i === parseInt(clickedPosition)) {
    //                 dispatch(change(String(i), String(blank)));
    //                 break;
    //             }
    //         }
    //     }
    // }, { once: true })

    return (
        <StyledDiv>
            {forMapArr.map((val, index) => {
                return <Button num={data.numbers[val]} 
                        index={val} 
                        key={index}
                        onclick={handleClick}
                        backColor={color[parseInt(index / 4)]} 
                        grad={(index % 4 + 1) / 10}/>
            })}
        </StyledDiv>
    );
}

export default NumberGame;