import React, { useState, useCallback } from "react";

function Search({ filter }) {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = useCallback(
    (event) => {
      setSearchWord(event.target.value);
      filter(event.target.value);
    },
    [searchWord, filter]
  );

  return (
    <div className="ui large fluid icon input">
      <input
        value={searchWord}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
