import { REACT_APP_URL } from "../../../../helpers/constants";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
//import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Option } from "./Option/Option";
import { logout, getDecodedUsername } from "../../../../helpers/AuthHelper";

export const Options = () => {
  return (
    <div className="options d-flex justify-content-around">
      <Option redirect={`${REACT_APP_URL}/home`} icon={<HomeOutlinedIcon />} />

      <Option
        redirect={`${REACT_APP_URL}/add-post`}
        icon={<AddBoxOutlinedIcon />}
      />

     {/*<Option
        redirect={`${REACT_APP_URL}/explore`}
        icon={<FavoriteBorderOutlinedIcon />}
  />*/}

      <Option
        redirect={`${REACT_APP_URL}/profiles/${getDecodedUsername()}`}
        icon={<PersonOutlinedIcon />}
      />

      <span className="icon" tabIndex="0">
        <LogoutOutlinedIcon className="icon" onClick={logout} />
      </span>
    </div>
  );
};
