import "../Login/Login.css";
import "./ForgottenPassword.css";

import { resetPassword } from "../../../services/UserService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FPasswordForm } from "./FPasswordForm/FPasswordForm";
import { BackToLogin } from "./BackToLogin/BackToLogin";

toast.configure();

const ForgottenPassword = () => {
 
  const onSubmit = (data) => {
    resetPassword(data.email).then((result) => {
      toast("Proverite vas email!");
    });
  };

  return (
    <div className="main-container">
      <div className="colon">
        <FPasswordForm onSubmit={onSubmit} />
        <BackToLogin />
      </div>
    </div>
  );
};

export default ForgottenPassword;
