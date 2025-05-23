import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
    
        <div className="input-field input-row">
        <input
          type="search"
           className = "validate"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="btn orange darken-4"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

    </div>
  );
}

export { Search };
