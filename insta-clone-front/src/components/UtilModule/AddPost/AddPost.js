import { publishPost } from "../../../services/PostService";
import "../../AuthModule/Registration/Registration.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddPostForm } from "./AddPostForm/AddPostForm";

toast.configure();

const AddPost = () => {
  const onSubmit = (data) => {
    console.log(data);
    publishPost(data)
      .then(() => {
        window.location.href = "/home";
      })
      .catch(() => {
        toast("neka greska");
      });
  };

  return (
    <div className="add-post mt-2">
      <AddPostForm onSubmit={onSubmit} />
    </div>
  );
};
export default AddPost;
