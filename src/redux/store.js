import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";

import dataWatcher from "@/redux/modules/table/sagas";
import rootReducer from "@/redux/rootReducer";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(dataWatcher);