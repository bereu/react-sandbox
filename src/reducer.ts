
import {INCREMENT, DECREMENT} from "./action";

const initialState = {
    count: 0
}

function reducer(state = initialState, action: {type: string}) {
    switch(action.type) {
        case INCREMENT: 
            return {
                count: state.count + 1
            };
        case DECREMENT: 
            return {
                count: state.count - 1
            };
        default: {
            return {
                count: 0
            }
        }
    }
}

export default reducer;
