import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectorCounterState = (state:AppState)=>{return state.CounterState};
export const counterSelector = createSelector(
    selectorCounterState,
    state=> state.count
)