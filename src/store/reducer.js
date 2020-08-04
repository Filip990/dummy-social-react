import produce from "immer";
import * as ACTIONS from "./actions";

const initialState = {
	dashboardPosts: [],
	isLoading: false,
	error: null,
};

const appReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ACTIONS.DASHBOARD_FETCH:
				draft.isLoading = true;
				break;

			case ACTIONS.DASHBOARD_FETCH_SUCCESS:
				draft.isLoading = false;
				draft.dashboardPosts = action.data?.data;
				break;

			case ACTIONS.DASHBOARD_FETCH_FAILURE:
				draft.isLoading = false;
				draft.error = action.error;
				break;

			default:
				return state;
		}
	});
};

export default appReducer;
