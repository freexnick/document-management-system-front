import { fileUpload } from "../api/upload";

export const Upload = ({ getFiles }) => {
  const handleFileSubmission = async (e) => {
    e.preventDefault();
    const fileSize = e.target.file?.files[0]?.size / 1024 ** 2;
    if (fileSize > 25) return;
    const fileDetails = {
      visibility: e.target[1].value,
      file: e.target.file?.files[0],
      fileSize,
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
