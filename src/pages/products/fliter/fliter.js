import React from "react";
import "./fliter.css";

const Fliter = (props) => {
  const { onClickHandler } = props;

  const filter = ["All", "Orther", "Handbag", "Shirts"];
  return (
    <>
      {" "}
      <ul className="filter">
        {filter.map((el) => (
          <li
            key={el}
            className="list active"
            data-filter={el}
            onClick={() => onClickHandler(el)}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fliter;
