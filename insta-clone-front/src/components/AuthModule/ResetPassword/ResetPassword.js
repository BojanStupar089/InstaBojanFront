import "./ResetPassword.css"
import * as userService from "../../../services/UserService"
import {ResetPasswordForm} from "./ResetPasswordForm/ResetPasswordForm"
import { useParams } from "react-router"


const ResetPassword = () => {
    let { token } = useParams();

    const onSubmit = (data) => {
        userService.changePasswordWithToken(token, data).then((result) =>{
            window.location.href="/login"
        })
    }

    return <div className="main-container">
        <div className="colon">
            <ResetPasswordForm onSubmit={onSubmit} />
        </div>
    </div>
}

export default ResetPassword;