export const CHANGE = "CHANGE";
export const CORRECT = "CORRECT";
export const START = "START";
export const SHUFFLE = "SHUFFLE";
export const INITIALIZE = "INITIALIZE";

//액션에 필요한 기자재(객체)를 정의함.
export const change = (clickedPosition, blankPosition) => ({ // 액션명
    type: CHANGE, // 액션 키값
    clicked: clickedPosition,
    blank: blankPosition
})

export const correct = (val) => ({
    type: CORRECT,
    cur: val,
})

export const start = (val) => ({
    type: START,
    cur: val,
})

export const shuffle = () => ({
    type: SHUFFLE
})

export const initialize = () => ({
    type: INITIALIZE
})