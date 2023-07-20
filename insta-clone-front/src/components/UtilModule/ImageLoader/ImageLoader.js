import { readFile } from "../../../helpers/ImageHelper";

export const ImageLoader = ({ setFileString, title }) => {
  const readingFile = async (e) => {
    const file_string = await readFile(e);
    setFileString(file_string);
  };

  return (
    <div className="form-group mb-3">
      <div className="custom-file">
        <label className="custom-file-label align-left">{title}</label>
        <input
          type="file"
          className="custom-file-input"
          accept="image/png, image/jpeg, image/jpg"
          id="inputGroupFile01"
          onChange={(e) => readingFile(e.target)}
        />
      </div>
    </div>
  );
};
