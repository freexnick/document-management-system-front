import { fileUpload } from "../api/upload";
import { useAuthContext } from "../Auth/AuthContext";

export const Upload = ({ getFiles }) => {
  const { status } = useAuthContext();
  const handleFileSubmission = async (e) => {
    const fileSize = e.target.file?.files[0].size / 1024 ** 2;
    e.preventDefault();
    if (status?.spaceUsed + fileSize > status?.spaceLimit) return;
    const fileDetails = {
      owner: status?._id,
      email: status?.email,
      visibility: e.target[1].value,
      file: e.target.file?.files[0],
    };
    await fileUpload(fileDetails);
    await getFiles();
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleFileSubmission}>
        <input
          type="file"
          name="file"
          id="file"
          accept=".doc, .docx,.txt,.pdf"
        />
        <select>
          <option value="public" defaultChecked>
            public
          </option>
          <option value="private">private</option>
        </select>
        <button type="submit" onSubmit={handleFileSubmission}>
          Submit
        </button>
      </form>
    </>
  );
};
