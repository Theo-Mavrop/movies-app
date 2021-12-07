import { CinemaDTO } from "@ultraplex-app/api";
import { IBasePagedState, IBaseResultState } from "../../app-store/app.state";

export interface ICinemasState extends IBasePagedState, IBaseResultState{
  cinemas: CinemaDTO[]
}

export const initialCinemasState: ICinemasState = {
  cinemas: null,
  totalElements: null,
  totalPages: null,
  size: null,
  number: null,
  numberOfElements: null,
  action: null,
  done: false,
  error: null
};

export const cinemasFeatureKey = 'cinemas';
