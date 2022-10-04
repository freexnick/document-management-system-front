import axios from "axios";
import { URL } from "../utils/config";

const getUsers = async () => {
  const { data } = await axios.get(`${URL}/user`);
  return data;
};

const getUser = async (data) => axios.get(`${URL}/user/${data}`);

const updateUser = async (data) =>
  await axios.put(`${URL}/user/${data.email}`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

const createUser = async (data) =>
  await axios.post(`${URL}/user`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

const deleteUser = async (data) =>
  await axios.delete(`${URL}/user/${data}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

export { getUsers, updateUser, createUser, deleteUser, getUser };
