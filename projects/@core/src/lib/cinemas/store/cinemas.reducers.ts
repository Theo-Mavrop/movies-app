import { CinemasActions, ECinemasActions } from "./cinemas.actions";
import { ICinemasState, initialCinemasState } from "./cinemas.state";

export const cinemasReducers = (
  state = initialCinemasState,
  action: CinemasActions
): ICinemasState => {
  switch (action.type) {
    case ECinemasActions.LoadCinemas: {
      return {
        ...state,
        action: ECinemasActions.LoadCinemas,
        done: false,
        error: null
      };
    }
    case ECinemasActions.CinemasLoaded: {
      return {
        ...state,
        cinemas: action.payload.content,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
        size: action.payload.size,
        number: action.payload.number,
        numberOfElements: action.payload.numberOfElements,
        done: true,
        error: null
      };
    }
    case ECinemasActions.CinemasLoadedFailed: {
      return {
        ...state,
        done: true,
        error: action.payload
      };
    }
    case ECinemasActions.CreateCinema: {
      return {
        ...state,
        action: ECinemasActions.CreateCinema,
        done: false,
        error: null
      }
    }
    case ECinemasActions.CreateCinemaSuccess: {
      return {
        ...state,
        done: true,
        error: null
      }
    }
    case ECinemasActions.CreateCinemaFail: {
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

