export interface IDashboardState {
  totalCinemas: number;
  totalMovies: number;
  totalBookings: number;
  totalScreens: number;
}

export const initialDashboardState: IDashboardState = {
  totalCinemas: null,
  totalMovies: null,
  totalBookings: null,
  totalScreens: null
};

export const dashboardFeatureKey = 'dashboard';
