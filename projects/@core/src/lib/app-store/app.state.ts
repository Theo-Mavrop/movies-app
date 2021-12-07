export interface AppState {
}

export interface IBasePagedState {
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements: number;
}

export interface IBaseResultState {
  action: string;
  done: boolean;
  error?: Error;
}
