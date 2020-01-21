import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {RootState, store} from "./store";
import {increment, decrement} from "./action";

export const Counter: React.FC = () => {
    const dispatcher = useDispatch();
    const state = useSelector((state:RootState) => state);

    return (
        <div className="counter">
            <h1> counter </h1>
            <p>{state.count}</p>
            <p>{store.getState().count}</p>
            <button onClick={() => dispatcher(increment())} >count up</button>
            <button onClick={() => dispatcher(decrement())} >count down</button>
        </div>
        
    )
}
