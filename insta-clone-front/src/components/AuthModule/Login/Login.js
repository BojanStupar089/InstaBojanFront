import "./Login.css"
import {login} from "../../../services/AuthService"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginForm } from "./LoginForm/LoginForm"
import {LoginBottom} from "./LoginBottom/LoginBottom"

toast.configure()


const Login = () => {

    const onSubmit = (data) => {
        login(data).then((result) => {
            if(result.data.token){
                sessionStorage.setItem("token", result.data.token);
                window.location.href="/home"
            }
        }).catch((error) => {
            toast.error("Losi kredencijali")
        });
    }

    return <div className="main-container">
        <div className="colon">
            <LoginForm onSubmit={onSubmit}/>
            <LoginBottom /> 
        </div>
    </div>
    
}
export default Login;