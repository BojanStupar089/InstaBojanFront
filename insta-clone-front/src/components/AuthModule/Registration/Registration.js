import { registration, login } from "../../../services/AuthService";
import "./Registration.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";

toast.configure();

const Registration = () => {
  
  const onSubmit = (data) => {
    
    registration(data)
      .then(() => {
        login({ username: data.username, password: data.password }).then(
          (result2) => {
            if (result2.data.token) {
              sessionStorage.setItem("token", result2.data.token);
              window.location.href = "/home";
            }
          }
        );
      })
      .catch(() => {
        toast.error("Username/email vec postoji!");
      });
  };

  return (
    <div className="main-container">
      <div className="colon">
        <RegistrationForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Registration;
