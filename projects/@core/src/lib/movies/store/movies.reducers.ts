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
        movies: action.payload.data,
        totalElements: action.payload.items,
        totalPages: action.payload.pages,
        numberOfElements: action.payload.data.length,
        done: true,
        error: null
      };
    }
    case EMoviesActions.DeleteMovieFail:
    case EMoviesActions.EditMovieFail:
    case EMoviesActions.CreateMovieFail:
    case EMoviesActions.SearchMoviesFailed:
    case EMoviesActions.MoviesLoadedFailed: {
      return {
        ...state,
        done: true,
        error: action.payload
      };
    }
    case EMoviesActions.SearchMovies: {
      return {
        ...state,
        action: EMoviesActions.SearchMovies,
        done: false,
        error: null
      }
    }
    case EMoviesActions.SearchMoviesLoaded: {
      return {
        ...state,
        movies: action.payload,
        totalElements: action.payload.length,
        totalPages: 1,
        numberOfElements: action.payload.length,
        done: true,
        error: null
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
    case EMoviesActions.DeleteMovieSuccess:
    case EMoviesActions.EditMovieSuccess:
    case EMoviesActions.CreateMovieSuccess: {
      return {
        ...state,
        done: true,
        error: null
      }
    }
    case EMoviesActions.EditMovie: {
      return {
        ...state,
        action: EMoviesActions.EditMovie,
        done: false,
        error: null
      }
    }
    case EMoviesActions.DeleteMovie: {
      return {
        ...state,
        action: EMoviesActions.DeleteMovie,
        done: false,
        error: null
      }
    }
    case EMoviesActions.GetMovie: {
      return {
        ...state,
        action: EMoviesActions.GetMovie,
        done: false,
        error: null
      }
    }
    case EMoviesActions.MovieLoaded: {
      return {
        ...state,
        selectedMovie: action.payload,
        done: true,
        error: null
      }
    }
    case EMoviesActions.MovieLoadedFailed: {
      return {
        ...state,
        selectedMovie: null,
        done: true,
        error: action.payload
      }
    }
    default:
      return state;
  }
};

