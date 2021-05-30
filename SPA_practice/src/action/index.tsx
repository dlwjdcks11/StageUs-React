export const CHANGE:string = "CHANGE";
export const SPAWN:string = "SPAWN";

export const change = (v:number):object => ({
    type: CHANGE,
    value: v
});

export const spawn = (v:number):object => ({
    type: SPAWN,
    spawnable: v,
})