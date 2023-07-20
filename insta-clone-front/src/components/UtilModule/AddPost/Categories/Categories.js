import { CATEGORIES } from "../../../../helpers/constants";
import CheckBox from "../../../UtilModule/CheckBox/CheckBox";

import "./Categories.css";

export const Categories = ({ categories, setValue }) => {
  return (
    <>
      <h4>Categories</h4>
      <div className="categories">
        {CATEGORIES.map((ku) => {
          return (
            <CheckBox
              key={ku}
              value={ku}
              setValue={setValue}
              active={categories.includes(ku)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
