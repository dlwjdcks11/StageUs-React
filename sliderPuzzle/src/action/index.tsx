export const CHANGE:string = "CHANGE";
export const CORRECT:string = "CORRECT";
export const START:string = "START";
export const SHUFFLE:string = "SHUFFLE";
export const INITIALIZE:string = "INITIALIZE";

//액션에 필요한 기자재(객체)를 정의함.
export const change = (clickedPosition: string, blankPosition: string): object => ({ // 액션명
    type: CHANGE, // 액션 키값
    clicked: clickedPosition,
    blank: blankPosition
})

export const correct = (val:boolean): object => ({
    type: CORRECT,
    cur: val,
})

export const start = (val:boolean): object => ({
    type: START,
    cur: val,
})

export const shuffle = (): any => ({
    type: SHUFFLE
})

export const initialize = (): object => ({
    type: INITIALIZE
})