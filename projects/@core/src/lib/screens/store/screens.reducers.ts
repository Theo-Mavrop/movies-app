import { EScreensActions, ScreensActions } from "./screens.actions";
import { initialScreensState, IScreensState } from "./screens.state";


export const screensReducers = (
  state = initialScreensState,
  action: ScreensActions
): IScreensState => {
  switch (action.type) {
    case EScreensActions.LoadScreens: {
      return {
        ...state,
        action: EScreensActions.LoadScreens,
        done: false,
        error: null
      };
    }
    case EScreensActions.ScreensLoaded: {
      return {
        ...state,
        screens: action.payload.content,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
        size: action.payload.size,
        number: action.payload.number,
        numberOfElements: action.payload.numberOfElements,
        done: true,
        error: null
      };
    }
    case EScreensActions.ScreensLoadedFailed: {
      return {
        ...state,
        done: true,
        error: action.payload
      };
    }
    case EScreensActions.CreateScreen: {
      return {
        ...state,
        action: EScreensActions.CreateScreen,
        done: false,
        error: null
      }
    }
    case EScreensActions.CreateScreenSuccess: {
      return {
        ...state,
        done: true,
        error: null
      }
    }
    case EScreensActions.CreateScreenFail: {
      return {
        ...state,
        done: true,
        error: action.payload
      }
    }
    case EScreensActions.GetAllMoviesList: {
      return {
        ...state,
        action: EScreensActions.LoadScreens,
        done: false,
        error: null
      };
    }
    case EScreensActions.GetAllMoviesListSuccess: {
      return {
        ...state,
        moviesList: action.payload.content
      };
    }
    case EScreensActions.GetAllMoviesListFailed: {
      return {
        ...state,
        done: true,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

