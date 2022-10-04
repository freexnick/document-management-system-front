import { fileUpload } from "../api/upload";

export const Upload = ({ status }) => {
  const handleFileSubmission = (e) => {
    e.preventDefault();
    fileUpload(e.target.file?.files[0], status.userId);
  };

  return (
    <>
      <form onSubmit={handleFileSubmission}>
        <input type="file" name="file" id="file" />
        <button type="submit" onSubmit={handleFileSubmission}>
          Submit
        </button>
      </form>
    </>
  );
};
