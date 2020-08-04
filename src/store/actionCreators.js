import * as ACTIONS from "./actions";

export const fetchDashboard = () => ({ type: ACTIONS.DASHBOARD_FETCH });

export const fetchedDashboard = (payload) => ({
	type: ACTIONS.DASHBOARD_FETCH_SUCCESS,
	payload,
});

export const failedFetchDashboard = (error) => ({
	type: ACTIONS.DASHBOARD_FETCH_FAILURE,
	error,
});
