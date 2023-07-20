import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ImageLoader } from "../../../UtilModule/ImageLoader/ImageLoader";
import { Input } from "../../../UtilModule/Input/Input";
import { LocationSelect } from "../../../UtilModule/LocationSelect/LocationSelect";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Obavezno polje")
    .min(8, "Lozinka mora imati minimum 8 karaktera!"),
  username: yup.string().required("Obavezno polje!"),
  repeatedPassword: yup
    .string()
    .test("passwords-match", "Lozinke se ne poklapaju!", function (value) {
      return this.parent.password === value;
    }),
  email: yup.string().required("Obavezno polje").email("Unesite validan mejl!"),
  name: yup.string().required("Obavezno polje"),
 // bio: yup.string(),
  profilePicture: yup.string(),
 // location: yup.object(),
  gender: yup.string(),
  birthday: yup.date(),
});

export const RegistrationForm = ({ onSubmit }) => {
  const [fileString, setFileString] = useState("");
 // const [location, setLocation] = useState(null);
  const [gender, setGender] = useState("MALE");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const preOnSubmit = (data) => {
    data.profilePicture = fileString;
  //  data.location = location;
    data.gender = gender;
    onSubmit(data);
  };

  return (
    <form
      className="registration-container row"
      onSubmit={handleSubmit(preOnSubmit)}
    >
      <div className="col-sm-12">
        <h1>Instagram</h1>
        <p>Sign up to see photos and videos from your friends.</p>
      </div>
      <div className="col">
        <Input
          type={"text"}
          className="form-control"
          placeholder="Username"
          name="username"
          register={register}
          errors={errors}
        />

        <Input
          type={"password"}
          className="form-control"
          placeholder="Password"
          name="password"
          register={register}
          errors={errors}
        />

        <Input
          type={"password"}
          className="form-control"
          placeholder="Repeat password"
          name="repeatedPassword"
          register={register}
          errors={errors}
        />

        <Input
          type={"email"}
          className="form-control"
          placeholder="Email"
          name="email"
          register={register}
          errors={errors}
        />
        <Input
          type={"text"}
          className="form-control"
          placeholder="Name"
          name="name"
          register={register}
          errors={errors}
        />

        {/* <Input
          type={"text"}
          className="form-control"
          placeholder="Bio"
          name="bio"
          register={register}
          errors={errors}
        /> */}
      </div>

      <div className="col">
        <div className="d-flex justify-content-between mb-4">
          <label className="label">Pol:</label>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => setGender("MALE")}
              checked
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={() => setGender("FEMALE")}
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>

        <label className="label">Birthday</label>
        <Input
          type={"date"}
          className="form-control"
          placeholder="Birthday"
          name="birthday"
          register={register}
          errors={errors}
        />

      {/* //  <LocationSelect setLocation={setLocation} /> */}

        <ImageLoader setFileString={setFileString} title="Profilna slika" />

        {fileString && (
          <div class="img-preview">
            <img v-if="profilePicture" src={fileString} alt="slika" />
          </div>
        )}
      </div>

      <div className="form-group">
        <button
          type="button submit"
          className="btn btn-primary btn-block w-100"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
