import { useSelector, useDispatch } from 'react-redux';
import { change } from '../action/index'
import Button from './Button'

let flag = true;
const NumberGame = () => {
    const forMapArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    const data = useSelector(state => state)
    const dispatch = useDispatch();
    if (JSON.stringify(data.numbers) === JSON.stringify({"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":" "}) && flag) {
        document.getElementById('wrap').style.display = "none"
        let answer = document.createTextNode("정답입니다!");
        document.getElementById('root').appendChild(answer);
        flag = false;
    }
    //console.log('aaa');

    document.getElementById('root').addEventListener("click", function(e) {
        if (e.target.className === 'numBtn') {
            let blank = -1;
            let nearPosition = [-1, -1, -1, -1];
            let clickedPosition = e.target.parentNode.id;
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
                    document.getElementById(String(blank)).childNodes[0].innerHTML = e.target.innerHTML;
                    e.target.innerHTML = ' ';
                    
                    dispatch(change(String(i), String(blank)));
                }
            }
        }
    })

    return (
        <div id="wrap">
            {forMapArr.map((val) => {
                return <Button num={data.numbers[val]} index={val}/>
            })}
        </div>
    );
}

export default NumberGame;