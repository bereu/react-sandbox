import {createStore} from "redux";

import reducer from "./reducer";

export type RootState = ReturnType<typeof reducer>

export const store = createStore(reducer);
