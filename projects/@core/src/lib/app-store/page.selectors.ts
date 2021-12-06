import { IBasePagedState } from "./app.state";

export const selectTotalElements = (_state: IBasePagedState) => _state.totalElements;
