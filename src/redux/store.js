import { createStore, applyMiddleware } from "redux";
import items from "./reducer";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import dataWatcher from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(items, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(dataWatcher);