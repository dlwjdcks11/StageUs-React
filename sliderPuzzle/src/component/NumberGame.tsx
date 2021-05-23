import React, { MouseEventHandler } from 'react';
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
    transform:translate(-50%, -50%);
`;

export let tmp:any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
export let shuffle = (arr:any):any => {
    while(true) {
        let entropy:number = 0;        
        arr.sort(() => {
            return Math.random() - Math.random();
        })

        for (let i of arr) {
            for (let j of arr) {
                if (arr.indexOf(j) > arr.indexOf(i) && i > j) {
                    entropy += 1;
                }
            }
        }
        if (entropy % 2 === 0) {
            let numJSON:any = new Object();
            numJSON.numbers = {
                "1": arr[0],
                "2": arr[1],
                "3": arr[2],
                "4": arr[3],
                "5": arr[4],
                "6": arr[5],
                "7": arr[6],
                "8": arr[7],
                "9": arr[8],
                "10": arr[9],
                "11": arr[10],
                "12": arr[11],
                "13": arr[12],
                "14": arr[13],
                "15": arr[14],
                "16": arr[15],
            }
            numJSON.current = false;
            numJSON.isStarted = false;
            
            return numJSON;
        }
    }
}

export const NumberGame = ():JSX.Element => {
    const forMapArr:string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    const compare:object = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":" "};
    const color:string[] = ["#379392", "#4FB0C6", "#4F86C6", "#6C49B8"];
    const data:any = useSelector(state => state);
    const dispatch:any = useDispatch();

    const handleClick = (e:any):void => {
        let clickedPosition:string = e.target.parentNode.id;
        let blank:number = -1;
        let nearPosition:number[] = [-1, -1, -1, -1];
            
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

    return (
        <StyledDiv>
            {forMapArr.map((val:string, idx:number):JSX.Element => {
                return <Button num={data.numbers[val]} 
                        index={val} 
                        key={idx}
                        onclick={handleClick}
                        backColor={color[Math.floor(idx / 4)]} 
                        grad={(idx % 4 + 1) / 10}/>
            })}
        </StyledDiv>
    );
}
