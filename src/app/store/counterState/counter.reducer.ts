import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction, resetAction } from "./counter.action";

export interface counterState {
    count:number;
}
export const initialCounterState:counterState = {
    count:0
}

export const counterReducer = createReducer(
    initialCounterState,
    on(incrementAction, state=>({...state, count:state.count + 1 })),
    on(decrementAction, state=>({...state, count:state.count - 1 })),
    on(resetAction, state=>({...state, count:0 }))
)