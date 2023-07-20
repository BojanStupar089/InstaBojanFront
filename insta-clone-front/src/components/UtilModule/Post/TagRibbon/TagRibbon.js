import React from "react";
import TimeRibbon from "../TimeRibbon/TimeRibbon.js";
import "./TagRibbon.css";

const TagRibbon = ({ tags, datetime }) => {
  const processedTags = tags?.map((t) => "#" + t.replace("_", "&"));

  const tagClick = (tag) => {
    alert(`Mozda napraviti pretragu objava po ${tag} ?`);
  };

  return !!tags && tags[0] ? (
    <div className="even">
      <div className="col">
        <div className="tag-container">
          {processedTags.map((t, id) => (
            <span key={id} className="tag" onClick={() => tagClick(t)}>
              {t.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
      <div className="col right">
        <TimeRibbon datetime={datetime}></TimeRibbon>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default TagRibbon;
