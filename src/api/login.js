import axios from "axios";
import { URL } from "../utils/config";

export const login = async (data) =>
  await axios.post(`${URL}/login`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
