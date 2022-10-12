import axios from "axios";
import { URL } from "../utils/config";

const getDocuments = async () => {
  const { data } = await axios.get(`${URL}/documents`);
  return data;
};

const getPublicDocuments = async () => await axios.get(`${URL}/public`);

const deleteDocument = async (id) =>
  await axios.delete(`${URL}/documents/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

const downloadFile = async (path, fileName) => {
  const response = await axios.get(
    `${URL}/documents/${path.split("\\").slice(1)}`,
    { responseType: "blob" }
  );
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export { getDocuments, deleteDocument, downloadFile, getPublicDocuments };
