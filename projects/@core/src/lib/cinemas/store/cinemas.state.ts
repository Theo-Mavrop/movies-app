import { CinemaDTO } from "@ultraplex-app/api";
import { IBasePagedState } from "../../app-store/app.state";

export interface ICinemasState extends IBasePagedState{
  cinemas: CinemaDTO[]
}

export const initialCinemasState: ICinemasState = {
  cinemas: null,
  totalElements: null,
  totalPages: null,
  size: null,
  number: null,
  numberOfElements: null
};

export const cinemasFeatureKey = 'cinemas';
