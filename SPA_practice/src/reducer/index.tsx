import { CHANGE, SPAWN } from "../action/index"

const initState:any = {
    value: 0,
    spawnable: 0,
}

const reducer = (state:any = initState, action:any) => {
    switch(action.type) {
        case CHANGE:
            return { ...state, value: action.value };

        case SPAWN:
            return { ...state, spawnable: action.spawnable };

        default:
            return { ...state };
    }
}

export default reducer;