import { MovieDTO } from '@movies-app/api';
import { IBasePagedState, IBaseResultState } from '../../app-store/app.state';

export interface IMoviesState extends IBasePagedState, IBaseResultState {
  movies: MovieDTO[],
  selectedMovie: MovieDTO
}

export const initialMoviesState: IMoviesState = {
  movies: null,
  selectedMovie: null,
  totalElements: null,
  totalPages: null,
  size: 10,
  number: 1,
  numberOfElements: null,
  action: null,
  done: false,
  error: null
};

export const moviesFeatureKey = 'movies';
