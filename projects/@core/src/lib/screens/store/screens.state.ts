import { MovieDTO, ScreenDTO } from "@movies-app/api";
import { IBasePagedState, IBaseResultState } from "../../app-store/app.state";

export interface IScreensState extends IBasePagedState, IBaseResultState{
  screens: ScreenDTO[],
  moviesList: MovieDTO[]
}

export const initialScreensState: IScreensState = {
  screens: null,
  totalElements: null,
  totalPages: null,
  size: null,
  number: null,
  numberOfElements: null,
  action: null,
  done: false,
  error: null,
  moviesList: null
};

export const screensFeatureKey = 'screens';
