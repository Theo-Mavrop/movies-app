import { CinemasActions, ECinemasActions } from "./cinemas.actions";
import { ICinemasState, initialCinemasState } from "./cinemas.state";

export const cinemasReducers = (
  state = initialCinemasState,
  action: CinemasActions
): ICinemasState => {
  switch (action.type) {
    case ECinemasActions.CinemasLoaded: {
      return {
        ...state,
        cinemas: action.payload.content,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
        size: action.payload.size,
        number: action.payload.number,
        numberOfElements: action.payload.numberOfElements
      };
    }
    default:
      return state;
  }
};

