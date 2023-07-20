import "./NotFoundPage.css"
import { Link } from 'react-router-dom'; 

import logo from "../../../static/images/404.png"

const NotFound = () => {
    return <>
        <div className="error">
            <div className="row">
                <div className="col-sm">
                    <img src={logo} width="400 px"></img>
                </div>

                <div className="col-sm">
                    <h2>Error 404</h2>
                    <h5>Page not found!</h5>
                    <Link to="/home"><div className="btn btn-primary">Back</div></Link>
                </div>
            </div>
        </div>
    </>
}

export default NotFound;