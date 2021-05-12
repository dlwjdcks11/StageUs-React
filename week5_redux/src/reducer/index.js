import { CHANGE } from "../action/index"

let tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
let shuffle = (arr) => {
    while(true) {
        let entropy = 0;        
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
        if (entropy % 2 == 0) {
            let numJSON = new Object();
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
            
            return numJSON;
        }
    }
}
let initData = shuffle(tmp);
//const initState = initData;
const initState = {
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
    }
}

// const initState = {
//     value: 10,
//     diff: 1,
// }

// 액션에 대한 정의 작성
const reducer = (state = initState, action) => { // 리덕서 생성( 리덕서는 state의 action을 매개변수로 받음 )
    switch (action.type) {
        case CHANGE:
            // console.log(state.numbers);
            // console.log(action.clicked);
            // console.log(action.blank);
            let t = { ...state };
            t.numbers[action.blank] = t.numbers[action.clicked];
            t.numbers[action.clicked] = ' ';

            return t;

        default: // useSelector를 사용할 때 무조건 얘가 수행이 된다.
            return state;
    };
    // case INCREMENT:
    //     return { ...state, value: state.value + state.diff };
    // case DECREMENT:
    //     return { ...state, value: state.value - state.diff };
    // case SET_DIFF:
    //     return { ...state, diff: action.diff };
}

export default reducer;