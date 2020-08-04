import { takeLatest, call, put } from "redux-saga/effects";

import * as ACTIONS from "./actions";

import { getUserDashboard } from "../services/request";

function* getDashboardData() {
	try {
		const { data } = yield call(getUserDashboard);
		yield put({ type: ACTIONS.DASHBOARD_FETCH_SUCCESS, data });
	} catch (error) {
		yield put({ type: ACTIONS.DASHBOARD_FETCH_FAILURE, error });
	}
}

export function* mainSaga() {
	yield takeLatest(ACTIONS.DASHBOARD_FETCH, getDashboardData);
}
