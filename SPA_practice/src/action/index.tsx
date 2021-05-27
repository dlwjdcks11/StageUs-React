export const CHANGE:string = "CHANGE";

export const change = (v:number):object => ({
    type: CHANGE,
    value: v
});