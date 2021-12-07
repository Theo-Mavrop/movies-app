import { MovieDTO } from '@ultraplex-app/api';
import { IBasePagedState, IBaseResultState } from '../../app-store/app.state';

export interface IMoviesState extends IBasePagedState, IBaseResultState {
  movies: MovieDTO[]
}

export const initialMoviesState: IMoviesState = {
  movies: null,
  totalElements: null,
  totalPages: null,
  size: 10,
  number: 0,
  numberOfElements: null,
  action: null,
  done: false,
  error: null
};

export const moviesFeatureKey = 'movies';
