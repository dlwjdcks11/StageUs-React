import { CHANGE, CORRECT, START, SHUFFLE, INITIALIZE } from "../action/index"
import { shuffle, tmp } from "../component/NumberGame"

const initState:any = {
    numbers: {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "11": 11,
        "12": 12,
        "13": 13,
        "14": 14,
        "15": ' ',
        "16": 15,
    },
    current: false,
    isStarted: false
}

// 액션에 대한 정의 작성
const reducer = (state:any = initState, action:any) => { // 리덕서 생성( 리덕서는 state의 action을 매개변수로 받음 )
    switch (action.type) {
        case CHANGE:
            let t1 = { ...state };
            t1.numbers[action.blank] = t1.numbers[action.clicked];
            t1.numbers[action.clicked] = ' ';

            return t1;

        case CORRECT:
            return { ...state, current: action.cur };

        case START:
            return { ...state, isStarted: action.cur };

        case SHUFFLE:
            let t3 = { ...state };
            t3.numbers = shuffle(tmp).numbers;
            t3.current = false;

            return t3;

        case INITIALIZE:
            let t2 = { ...state };
            t2.numbers = {
                "1": 1,
                "2": 2,
                "3": 3,
                "4": 4,
                "5": 5,
                "6": 6,
                "7": 7,
                "8": 8,
                "9": 9,
                "10": 10,
                "11": 11,
                "12": 12,
                "13": 13,
                "14": 14,
                "15": ' ',
                "16": 15,
            };
            t2.current = false;
            
            return t2;
        
        default: // useSelector를 사용할 때 무조건 얘가 수행이 된다.
            return state;
    };
}

export default reducer;