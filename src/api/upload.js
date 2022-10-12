import axios from "axios";
import { URL } from "../utils/config";

export const fileUpload = async ({ file, visibility }) => {
  const formData = new FormData();
  formData.append("visibility", visibility);
  formData.append("file", file);

  await axios.post(`${URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
