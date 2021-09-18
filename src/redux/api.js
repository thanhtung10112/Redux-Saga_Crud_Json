import axios from "axios";

export const loadUsersApi = async () =>
  await axios.get("http://localhost:5000/users");

//* ADD
export const createUsersApi = async (users) =>
  await axios.post("http://localhost:5000/users", users);

//! DELETE
export const deleteUsersApi = async (usersId) =>
  await axios.delete(`http://localhost:5000/users/${usersId}`);

//* UPDATE
export const updateUsersApi = async (usersId, usersInfo) =>
  await axios.put(`http://localhost:5000/users/${usersId}`, usersInfo);
