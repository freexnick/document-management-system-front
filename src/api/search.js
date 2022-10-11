import axios from "axios";
import { URL } from "../utils/config";

const findUser = async (data) => axios.get(`${URL}/search/user/${data}`);

const findDocument = async (data) =>
  axios.get(`${URL}/search/document/${data}`);

export { findUser, findDocument };
