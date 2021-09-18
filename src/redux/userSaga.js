import * as types from "./actionTypes";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  createUsersApi,
  deleteUsersApi,
  loadUsersApi,
  updateUsersApi,
} from "./api";
import {
  loadUsersSuccess,
  loadUsersError,
  createUsersSuccess,
  createUsersError,
  deleteUsersSuccess,
  deleteUsersError,
  updateUsersSuccess,
  updateUsersError,
} from "./actions";

//* load data
function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

//* Add
function* onCreateUsersStartAsync({ payload }) {
  try {
    const response = yield call(createUsersApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.response.data));
  }
}

function* onCreateUsers() {
  yield takeEvery(types.CREATE_USERS_START, onCreateUsersStartAsync);
}

// !DELETE

function* onDeleteUsersStartAsync({ payload }) {
  console.log("Delete =>", payload); //* Kiểm tra
  try {
    const response = yield call(deleteUsersApi, payload);
    console.log("status", response.status);
    yield delay(500);
    yield put(deleteUsersSuccess(payload));
  } catch (error) {
    yield put(deleteUsersError(error.response.data));
  }
}

function* onDeleteUSers() {
  yield takeLatest(types.DELETE_USERS_START, onDeleteUsersStartAsync);
}

//* UPDATE
function* onUpdateUsersStartAsync({ payload: { id, formValue } }) {
  console.log("UPDATE => ", formValue);
  try {
    const response = yield call(updateUsersApi, id, formValue);
    if (response.status === 200) {
      yield put(updateUsersSuccess());
    }
  } catch (error) {
    yield put(updateUsersError(error.response.data));
  }
}

function* onUpdateUSers() {
  yield takeLatest(types.UPDATE_USERS_START, onUpdateUsersStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUsers),
  fork(onDeleteUSers),
  fork(onUpdateUSers),
];

export default function* rootSaga() {
  yield all([...userSagas]);
  yield fork(onLoadUsers);
}
