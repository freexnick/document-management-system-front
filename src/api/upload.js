import axios from "axios";
import { URL } from "../utils/config";

export const fileUpload = async ({ owner, email, file, visibility }) => {
  const formData = new FormData();
  formData.append("owner", owner);
  formData.append("visibility", visibility);
  formData.append("email", email);
  formData.append("file", file);

  await axios.post(`${URL}/upload/${owner}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
