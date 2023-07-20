import {REACT_APP_URL} from "../../../../helpers/constants"
import logo from "../../../../static/images/insta_logo.png"

export const Brand = ({height}) => {
    return <a className="navbar-brand ml-2" href={`${REACT_APP_URL}/home`}>
        <img alt="Instagram" src={logo} height={`${height}`}/>
    </a>
}