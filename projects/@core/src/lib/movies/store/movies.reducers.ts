import { EMoviesActions, MoviesActions } from "./movies.actions";
import { IMoviesState, initialMoviesState } from "./movies.state";

export const moviesReducers = (
  state = initialMoviesState,
  action: MoviesActions
): IMoviesState => {
  switch (action.type) {
    case EMoviesActions.LoadMovies: {
      return {
        ...state,
        action: EMoviesActions.LoadMovies,
        done: false,
        error: null
      };
    }
    case EMoviesActions.MoviesLoaded: {
      return {
        ...state,
        movies: action.payload.content,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
        size: action.payload.size,
        number: action.payload.number,
        numberOfElements: action.payload.numberOfElements,
        done: true,
        error: null
      };
    }
    case EMoviesActions.MoviesLoadedFailed: {
      return {
        ...state,
        done: true,
        error: action.payload
      };
    }
    case EMoviesActions.CreateMovie: {
      return {
        ...state,
        action: EMoviesActions.CreateMovie,
        done: false,
        error: null
      }
    }
    case EMoviesActions.CreateMovieSuccess: {
      return {
        ...state,
        done: true,
        error: null
      }
    }
    case EMoviesActions.CreateMovieFail: {
      return {
        ...state,
        done: true,
        error: action.payload
      }
    }
    default:
      return state;
  }
};

