import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import dataWatcher from "./modules/table/sagas";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(dataWatcher);