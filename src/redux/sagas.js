import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { actionTypes } from "./action-types";
import { getData } from "./action-creators";

const url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

const fetchData = () => axios.get(url);  

function* dataWorker() {
  try {
    const response = yield call(fetchData);
    yield put(getData(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* dataWatcher() {
  yield takeLatest(actionTypes.FETCH_DATA, dataWorker);
}
