import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ImageLoader } from "../../../UtilModule/ImageLoader/ImageLoader";
import { Input } from "../../Input/Input";
import { LocationSelect } from "../../../UtilModule/LocationSelect/LocationSelect";
import { Categories } from "../Categories/Categories";

import "./AddPostForm.css";

const schema = yup.object().shape({
  text: yup.string().required("Obavezno polje"),
  picture: yup.string(),
  location: yup.object(),
});
export const AddPostForm = ({ onSubmit }) => {
  const [fileString, setFileString] = useState("");
  const [categories, setCategories] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [location, setLocation] = useState(null);

 const setValue = (value) => {
    if (categories.includes(value)) {
      setCategories(categories.filter((x) => x !== value));
    } else {
      const cat = categories;
      cat.push(value);
      setCategories(cat);
    }
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  const preOnSubmit = (data) => {
    data.picture = fileString;
   
   { if (locationName) {
      location.locationName = locationName;
    }
    data.location = location;
    data.categories = categories;
  }

    onSubmit(data);
  }



  return (
    <form
      className="registration-container row"
      onSubmit={handleSubmit(preOnSubmit)}
    >
      <div className="row">
        <h1>Add new post</h1>
        <p>Share your big moments with others</p>
      </div>
      <div className="col">
        <ImageLoader setFileString={setFileString} title="Slika" />
        <div className="post-preview">
          {fileString && (
            <img className="post-img" src={fileString} alt="slika" />
          )}
        </div>
      </div>
      <div className="col">
        <Input
          type={"text"}
          className="form-control"
          placeholder="Desription"
          name="text"
          register={register}
          errors={errors}
        />

        <LocationSelect setLocation={setLocation} />

        <Input
          type={"text"}
          className="form-control"
          placeholder="Location name"
          name="locationName"
          register={register}
          errors={errors}
          onChange={(e) => setLocationName(e.target.value)}
        />
        <Categories categories={categories} setValue={setValue} />
          

        <div className="form-group align-self-end">
          <button
            type="button submit"
            className="btn btn-primary btn-block w-100"
          >
            Add post
          </button>
        </div>
      </div>
    </form>
  );
};

