import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./userSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// const store = createStore(rootReducer, applyMiddleware(...middleware));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
