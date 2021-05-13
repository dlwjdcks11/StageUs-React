// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";
// export const SET_DIFF = "SET_DIFF";
export const CHANGE = "CHANGE";
export const FLAG = "FLAG";

//액션에 필요한 기자재(객체)를 정의함.
// export const increment = () => ({ // 액션명
//     type: INCREMENT // 액션 키값
// })

// export const decrement = () => ({
//     type: DECREMENT
// })

// export const setDiff = (value) => ({
//     type: SET_DIFF,
//     diff: value,
// })

export const change = (clickedPosition, blankPosition) => ({
    type: CHANGE,
    clicked: clickedPosition,
    blank: blankPosition
})

export const flag = (value) => ({
    type: FLAG,
    current: value,
})