import { REACT_APP_URL } from "../../../../helpers/constants";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Input } from "../../../UtilModule/Input/Input";

const schema = yup.object().shape({
  password: yup.string().required("Obavezno polje"),
  username: yup.string().required("Obavezno polje!"),
});

export const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form
        className="login-container login-top-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Instagram</h1>

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

        <div className="form-group">
          <button type="button submit" className="btn btn-primary w-100">
            Log in
          </button>
        </div>
        <hr />
        <a
          className="forgotten-password"
          href={`${REACT_APP_URL}/forgotten-password`}
        >
          Forgotten your password?
        </a>
      </form>
    </>
  );
};
