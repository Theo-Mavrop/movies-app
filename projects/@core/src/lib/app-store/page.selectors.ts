import { IBasePagedState } from "./app.state";

export const selectTotalElements = (_state: IBasePagedState) => _state.totalElements;

export const selectPage = (_state: IBasePagedState) => _state.number;

export const selectPageSize = (_state: IBasePagedState) => _state.size;
