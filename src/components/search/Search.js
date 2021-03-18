import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

import { filterData } from "@/redux/modules/table/selectors";

const Search = ({ handleFilterData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleIputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  const dataFiltered = useSelector(filterData(inputValue));

  const handleFilter = () => {
    handleFilterData(dataFiltered);
  };

  return (
    <div className="input-group mb-3">
      <Form.Control
        placeholder="Search"
        type="text"
        onChange={(e) => handleIputChange(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleFilter}
        >
          Go search
        </button>
      </div>
    </div>
  );
};

export default Search;
