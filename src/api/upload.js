import axios from "axios";
import { URL } from "../utils/config";

export const fileUpload = async (data, id) => {
  const formData = new FormData();
  formData.append("file", data);

  const result = await axios.post(`${URL}/upload/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(result);
};
