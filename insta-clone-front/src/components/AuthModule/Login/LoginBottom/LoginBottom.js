import {REACT_APP_URL} from "../../../../helpers/constants"

export const LoginBottom = () => {
    return <div className="login-container login-bottom-container">
        <label>Don't have an account?</label>
        <a className="sign-up" href={`${REACT_APP_URL}/registration`}>Sign up</a>
    </div>
}