import React from "react";
import "./portFolioList.scss";

function portFolioList({ id, title, active, setSelected }) {
  return (
    <li
      onClick={() => setSelected(id)}
      className={active ? "portFolioList active" : "portFolioList"}
    >
      {title}
    </li>
  );
}

export default portFolioList;
