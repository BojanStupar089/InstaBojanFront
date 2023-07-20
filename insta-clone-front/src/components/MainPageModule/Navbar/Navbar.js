import "./Navbar.css";
import { searchUsers } from "../../../services/UserService";
import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Brand } from "./Brand/Brand";
import { Options } from "./Options/Options";
import { UsersList } from "../UsersList/UsersList";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const search = (e) => {
    e.preventDefault();
    if (!query) {
      setUsers([]);
    } else {
      searchUsers(query).then((result) => {
        setUsers(result.data);
      });
    }
  };

  return (
    <>
      <nav className="my-navbar navbar sticky-top navbar-light justify-content-around">
        <Brand height={"30px"} />
        <SearchBar search={search} setQuery={setQuery} />
        {users.length !== 0 && <UsersList users={users} />}
        <Options />
      </nav>
    </>
  );
};

export default Navbar;
