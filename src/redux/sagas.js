import { put, call, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./action-types";
import { getData } from "./action-creators";
import DataApi from "../service/rest-api/DataApi";

function* dataWorker() {
  try {
    const response = yield call(DataApi.getData);
    yield put(getData(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* dataWatcher() {
  yield takeLatest(actionTypes.FETCH_DATA, dataWorker);
}
