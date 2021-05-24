import { CHANGE } from "../action/index"

const initState:any = {
    value: 0,
}

const reduce = (state:any = initState, action:any) => {
    switch(action.type) {
        case CHANGE:
            return { ...state, value: action.value };

        default:
            return { ...state };
    }
}