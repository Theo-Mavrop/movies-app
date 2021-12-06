import { DashboardActions, EDashboardActions } from "./dashboard.actions";
import { IDashboardState, initialDashboardState } from "./dashboard.state";

export const dashboardReducers = (
  state = initialDashboardState,
  action: DashboardActions
): IDashboardState => {
  switch (action.type) {
    case EDashboardActions.TotalCinemasLoaded: {
      return {
        ...state,
        totalCinemas: action.payload
      };
    }
    case EDashboardActions.TotalScreensLoaded: {
      return {
        ...state,
        totalScreens: action.payload
      };
    }
    case EDashboardActions.TotalMoviesLoaded: {
      return {
        ...state,
        totalMovies: action.payload
      };
    }
    case EDashboardActions.TotalBookingsLoaded: {
      return {
        ...state,
        totalBookings: action.payload
      };
    }
    default:
      return state;
  }
};

