import * as types from "./actionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

// * ADD create
export const createUsersStart = (users) => ({
  type: types.CREATE_USERS_START,
  payload: users,
});

export const createUsersSuccess = () => ({
  type: types.CREATE_USERS_SUCCESS,
});

export const createUsersError = (error) => ({
  type: types.CREATE_USERS_ERROR,
  payload: error,
});

// ! DELETE
export const deleteUsersStart = (usersId) => ({
  type: types.DELETE_USERS_START,
  payload: usersId,
});

export const deleteUsersSuccess = (usersId) => ({
  type: types.DELETE_USERS_SUCCESS,
  payload: usersId,
});

export const deleteUsersError = (error) => ({
  type: types.DELETE_USERS_ERROR,
  payload: error,
});

//* UPDATE USER
export const updateUsersStart = (usersInfo) => ({
  type: types.UPDATE_USERS_START,
  payload: usersInfo,
});

export const updateUsersSuccess = (usersId) => ({
  type: types.UPDATE_USERS_SUCCESS,
  payload: usersId,
});

export const updateUsersError = (error) => ({
  type: types.DELETE_USERS_ERROR,
  payload: error,
});
