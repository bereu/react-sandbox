import react from "react"
import {INCREMENT, DECREMENT} from "./action";


const initialState = {
    count: 0
}

function reducer(state = initialState, action: {type: string}) {
    switch(action.type) {
        case INCREMENT: 
            return {
                count: state.count++
            };
        case DECREMENT: 
            return {
                count: state.count--
            };
        default: {
            return {
                count: 0
            }
        }
    }
}

export default reducer;
