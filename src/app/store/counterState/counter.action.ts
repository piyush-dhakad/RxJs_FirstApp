import { createAction } from "@ngrx/store";

export const incrementAction = createAction('[Counter] increment');
export const decrementAction = createAction('[counter] decrement');
export const resetAction = createAction('[counter] reset');