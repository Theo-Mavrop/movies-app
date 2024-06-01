import { ScreeningDTO } from "@movies-app/api";
import { IBasePagedState, IBaseResultState } from "../../app-store/app.state";

export interface IScreeningsState extends IBasePagedState, IBaseResultState{
  screenings: ScreeningDTO[]
}

export const initialScreeningsState: IScreeningsState = {
  screenings: null,
  totalElements: null,
  totalPages: null,
  size: null,
  number: null,
  numberOfElements: null,
  action: null,
  done: false,
  error: null,
};

export const screeningsFeatureKey = 'screenings';
