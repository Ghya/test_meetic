import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { StateType } from "typesafe-actions";

import { answerReducer } from "./userAnswers/redux";
import { loaderReducer } from "./loader/redux";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// combine the reducers to a root reducer
const rootReducer = combineReducers({
  answer: answerReducer,
  loader: loaderReducer
});
export type State = StateType<typeof rootReducer>;
// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(function*() {});
