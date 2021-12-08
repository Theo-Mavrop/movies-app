import { EScreeningsActions, ScreeningsActions } from "./screenings.actions";
import { initialScreeningsState, IScreeningsState } from "./screenings.state";


export const screeningsReducers = (
  state = initialScreeningsState,
  action: ScreeningsActions
): IScreeningsState => {
  switch (action.type) {
    case EScreeningsActions.LoadScreenings: {
      return {
        ...state,
        action: EScreeningsActions.LoadScreenings,
        done: false,
        error: null
      };
    }
    case EScreeningsActions.ScreeningsLoaded: {
      return {
        ...state,
        screenings: action.payload.content,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
        size: action.payload.size,
        number: action.payload.number,
        numberOfElements: action.payload.numberOfElements,
        done: true,
        error: null
      };
    }
    case EScreeningsActions.ScreeningsLoadedFailed: {
      return {
        ...state,
        done: true,
        error: action.payload
      };
    }
    case EScreeningsActions.CreateScreening: {
      return {
        ...state,
        action: EScreeningsActions.CreateScreening,
        done: false,
        error: null
      }
    }
    case EScreeningsActions.CreateScreeningSuccess: {
      return {
        ...state,
        done: true,
        error: null
      }
    }
    case EScreeningsActions.CreateScreeningFail: {
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

