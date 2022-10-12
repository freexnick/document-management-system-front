import axios from "axios";
import { URL } from "../utils/config";

const login = async (data) =>
  await axios.post(`${URL}/login`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    withCredentials: true,
  });

const logout = async () => await axios.delete(`${URL}/login`);

export { login, logout };
