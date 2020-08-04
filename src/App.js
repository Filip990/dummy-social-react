import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import appReducer from "./store/reducer";
import { mainSaga } from "./store/sagas";

import { MainContainer } from "./App.styled";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

	sagaMiddleware.run(mainSaga);

	return (
		<Provider store={store}>
			<MainContainer>
				<Router>
					<Switch>
						<Route path="/" component={Dashboard} />
					</Switch>
				</Router>
			</MainContainer>
		</Provider>
	);
}

export default App;
