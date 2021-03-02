import React, { useCallback, useState } from "react";

const Search = ({ search }) => {
  const [inputValue, setInputValue] = useState("");

  const handleIputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={(e) => handleIputChange(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
          >
            Go search
          </button>
        </div>
      </div>
  );
};

export default Search;
