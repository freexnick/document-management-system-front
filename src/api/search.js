import axios from "axios";
import { URL } from "../utils/config";

const findUser = async (data) => axios.get(`${URL}/search/user/${data}`);

const findDocument = async (data, path) => {
  const query = path ? "?visibility=public" : "";
  return axios.get(`${URL}/search/document/${data}${query}`);
};

export { findUser, findDocument };
